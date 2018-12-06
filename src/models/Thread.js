import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('thread')
export default class Thread {
  @PrimaryGeneratedColumn()
  threadid = undefined;

  @Column('text')
  title = undefined;

  @Column('integer')
  forumid = undefined;

  @Column('integer')
  open = 0;

  
}