import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export default class User {
  @PrimaryGeneratedColumn()
  userid = undefined;
  
  @Column('text')
  username = '';

  @Column('integer')
  usergroupid = undefined;

  @Column('text')
  membergroupids = '';

  @Column('text')
  displaygroupid = undefined;

  @Column('integer')
  styleid = 0;

  @Column('text')
  customtitle = '';

  @Column('integer')
  joindate = undefined;

  @Column('text')
  posts = 0;

  @Column('integer')
  threadedmode = 0;

  @Column('integer')
  autosubscribe = -1;
}