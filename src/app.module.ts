import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import ApolloServerPluginLandingPageLocalDefault = require('@apollo/server/plugin/landingPage/default');
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KaryawanModule } from './karyawan/karyawan.module';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      path: '/graphql',
      autoSchemaFile: true,
      graphiql: false,
      plugins: [
        ApolloServerPluginLandingPageLocalDefault.ApolloServerPluginLandingPageLocalDefault(
          { embed: true },
        ) as unknown as NonNullable<ApolloDriverConfig['plugins']>[number],
      ],
    }),
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'uts-web-service',
    }),
    KaryawanModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}