import { User } from '../entities/User';
import { MyContext } from '../types';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async register(
    @Arg('username') username: string,
    @Arg('password') password: string,
    @Ctx() { em }: MyContext
  ): Promise<User> {
    const user = em.create(User, { username, password });
    await em.persistAndFlush(user);

    return user;
  }
}
