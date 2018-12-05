import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id = undefined;
  
  @Column('string')
  username = '';

  @Column('integer')
  usergroupid = undefined;

  @Column('string')
  membergroupids = '';

  @Column('string')
  displaygroupid = undefined;

  @Column('integer')
  styleid = 0;

  @Column('string')
  customtitle = '';

  @Column('integer')
  joindate = undefined;

  @Column('string')
  posts = 0;

  @Column('integer')
  threadedmode = 0;

  @Column('integer')
  autosubscribe = -1;
}