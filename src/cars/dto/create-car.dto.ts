import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CreateCarDto {
    @Field(() => ID)
    id: string
    @Field()
    readonly name: string
    @Field(() => Int)
    readonly dailyPrice: number
    @Field(() => Int)
    readonly monthlyPrice: number
    @Field()
    readonly mileage: string
    @Field()
    readonly gas: string
    @Field()
    readonly gearType: string 
    @Field()
    readonly thumbnailUrl: string
  }