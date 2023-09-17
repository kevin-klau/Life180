import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'createUser' : ActorMethod<[string, string], undefined>,
  'getUserScore' : ActorMethod<[string], bigint>,
  'setDecrementUserScore' : ActorMethod<[string], undefined>,
  'setIncrementUserScore' : ActorMethod<[string], undefined>,
  'verifyUser' : ActorMethod<[string, string], boolean>,
}
