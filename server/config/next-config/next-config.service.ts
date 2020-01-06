import { Injectable } from "@nestjs/common";
import path from "path";

@Injectable()
export class NextConfigService {
  getNextConfig() {
    return {
      dir: path.join(__dirname, "../..", "app"),
      dev: process.env.NODE_ENV !== "production",
      conf: {
        webpack: (
          config: any,
          { buildId, dev, isServer, defaultLoaders, webpack }: any
        ) => {
          console.log(config);
          // Note: we provide webpack above so you should not `require` it
          // Perform customizations to webpack config
          // Important: return the modified config
          config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
          return config;
        },
        webpackDevMiddleware: (config: any) => {
          // Perform customizations to webpack dev middleware config
          // Important: return the modified config
          return config;
        }
      }
    };
  }
}
