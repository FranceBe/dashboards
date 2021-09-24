import express, { Express, Request, Response, static as staticFactory } from 'express'
import { Server as httpServer } from 'http'
import { join, resolve } from 'path'
import request from 'request'
const bodyParser = require('body-parser')
const chalk = require('chalk')
const cors = require('cors')

import { Serverable } from '../types/server'
import { config as webpackConfig } from '../webpack.config'

const frontSrcBasedir = resolve(__dirname, '..', 'dist', 'src')
const htmlFile = join(frontSrcBasedir, 'index.html')
const staticMw = staticFactory(frontSrcBasedir)

export class Server implements Serverable {
  public app: Express
  public readonly port: number | string
  public server: httpServer | undefined

  constructor({ port }: { port: number | string }) {
    this.app = express()
    this.port = port
  }

  public init(): void {
    this.app.use(cors())
    this.app.use(bodyParser.json())
    this.app.use(staticMw)
    if (webpackConfig.mode === 'development') {
      // Initialize and use webpack middleware
      const webpackFactory = require('webpack')
      const webpackDevFactory = require('webpack-dev-middleware')
      const webpackCompiler = webpackFactory(webpackConfig)
      const webpackDevMiddleware = webpackDevFactory(webpackCompiler, {
        publicPath: webpackConfig.output?.publicPath,
      })
      this.app.use(webpackDevMiddleware)
    }
    // Connect the express backend to the API
    this.app.get('/api/devices', (req: Request, res: Response) => {
      const baseUrl = 'http://localhost:8010/devices'
      request(baseUrl, { json: true, qs: req.query }, (error, response, body) => {
        if (error) {
          res.send(error)
          return
        }
        res.json(body)
      })
    })
    // Connect the express backend to the frontend
    this.app.get('/', (req: Request, res: Response): void => {
      res.sendFile(htmlFile)
    })
    process.on('SIGINT', () => {
      this.stop()
    })
  }

  public start(): void {
    this.init()
    this.server = this.app.listen(this.port, () =>
      console.log(
        `${chalk.yellow('⚡')}️[server]: ${chalk.green('Server')} is running at ${chalk.blue(
          `http://localhost:${this.port}`,
        )}`,
      ),
    )
  }

  public stop(): void {
    console.log(`\n ${chalk.red('㊀')} You ${chalk.bold.red('stopped')} server. \n Goodbye !`)
    if (!this.server) {
      return
    } else {
      this.server.close()
      process.exit()
    }
  }
}
