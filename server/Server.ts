import express, { Express, Request, Response, static as staticFactory } from 'express'
import { Server as httpServer } from 'http'
import { join, resolve } from 'path'
import request from 'request'
const bodyParser = require('body-parser')
const chalk = require('chalk')
const cors = require('cors')

import { config as webpackConfig } from '../webpack.config'
import { Serverable } from './types/server'

require('dotenv').config()
const frontSrcBasedir = resolve(__dirname, '..', 'dist', 'src')
const htmlFile = join(frontSrcBasedir, 'index.html')
const staticMw = staticFactory(frontSrcBasedir)

let baseUrl = 'http://localhost'
if (process.env.DOCKER_RUNNING === 'true') {
  baseUrl = 'http://host.docker.internal'
}
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
      const url = `${baseUrl}:8010/devices`
      request(url, { json: true, qs: req.query }, (error, response, body) => {
        if (error) {
          res.send(error)
          return
        }
        res.json(body)
      })
    })
    this.app.get('/api/device/:id', (req: Request, res: Response) => {
      const url = `${baseUrl}:8010/device`
      request(`${url}/${req.params.id}`, { json: true, qs: req.query }, (error, response, body) => {
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
    // Call init function to init server with all needed routes & config
    this.init()
    // Start server and listen on port $PORT (4000 by default)
    this.server = this.app.listen(this.port, () =>
      console.log(
        `${chalk.yellow('⚡')}️ [server]: ${chalk.green('Server')} is running in port ${
          this.port
        } ${chalk.yellow('⚡')}`,
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
