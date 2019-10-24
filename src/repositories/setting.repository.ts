import {DefaultCrudRepository} from '@loopback/repository';
import {Setting, SettingRelations} from '../models';
import {AmazonPostgresDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SettingRepository extends DefaultCrudRepository<
  Setting,
  typeof Setting.prototype.id,
  SettingRelations
> {
  constructor(
    @inject('datasources.AmazonPostgres') dataSource: AmazonPostgresDataSource,
  ) {
    super(Setting, dataSource);
  }
}