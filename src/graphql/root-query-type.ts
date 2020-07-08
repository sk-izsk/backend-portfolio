import { GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { sendMail } from '../mail';
import { callMongoDB } from '../routes/get';

const AvatarType: any = new GraphQLObjectType({
  name: 'avatars',
  description: 'This represents of a Avatars',
  fields: () => ({
    avatarOne: { type: GraphQLNonNull(GraphQLString) },
    avatarTwo: { type: GraphQLNonNull(GraphQLString) },
  }),
});

const InformationType: any = new GraphQLObjectType({
  name: 'Information',
  description: 'This represents of a Information',
  fields: () => ({
    nameOfOrganization: { type: GraphQLNonNull(GraphQLString) },
    startYear: { type: GraphQLNonNull(GraphQLString) },
    endYear: { type: GraphQLNonNull(GraphQLString) },
    details: { type: GraphQLNonNull(GraphQLString) },
  }),
});

const PhotosType: any = new GraphQLObjectType({
  name: 'Photos',
  description: 'This represents of a Photos',
  fields: () => ({
    url: { type: GraphQLNonNull(GraphQLString) },
  }),
});

const SkillInformationType: any = new GraphQLObjectType({
  name: 'SkillInformation',
  description: 'This represents of a Skill Information',
  fields: () => ({
    name: { type: GraphQLNonNull(GraphQLString) },
    progress: { type: GraphQLNonNull(GraphQLInt) },
    backgroundColor: { type: GraphQLNonNull(GraphQLString) },
    technology: { type: GraphQLNonNull(GraphQLString) },
  }),
});

const OfferType: any = new GraphQLObjectType({
  name: 'Offer',
  description: 'This represents of Offer',
  fields: () => ({
    name: { type: GraphQLNonNull(GraphQLString) },
    offerings: { type: new GraphQLList(GraphQLString) },
  }),
});

const MyOfferType: any = new GraphQLObjectType({
  name: 'MyOffer',
  description: 'This represents of MyOffer',
  fields: () => ({
    frontEnd: { type: OfferType },
    backEnd: { type: OfferType },
  }),
});

const InformationsType = new GraphQLObjectType({
  name: 'Informations',
  description: 'Informations',
  fields: () => ({
    avatar: { type: AvatarType },
    educationInformations: { type: new GraphQLList(InformationType) },
    experienceInformations: { type: new GraphQLList(InformationType) },
    photos: { type: new GraphQLList(PhotosType) },
    skillsInformation: { type: new GraphQLList(SkillInformationType) },
    myOffers: { type: MyOfferType },
  }),
});

const EmailType: any = new GraphQLObjectType({
  name: 'Email',
  description: 'This represents of Email Post',
  fields: () => ({
    name: { type: GraphQLNonNull(GraphQLString) },
    subject: { type: GraphQLNonNull(GraphQLString) },
    message: { type: GraphQLNonNull(GraphQLString) },
  }),
});

const informationsType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    informations: {
      type: new GraphQLList(InformationsType),
      description: 'Get all the informations',
      resolve: () => callMongoDB(),
    },
    postEmail: {
      type: EmailType,
      description: 'post email',
      fields: () => ({
        response: 'message sent',
      }),
      args: {
        email: { type: GraphQLNonNull(GraphQLString) },
        subject: { type: GraphQLNonNull(GraphQLString) },
        message: { type: GraphQLNonNull(GraphQLString) },
      },

      resolve: (_, args) => sendMail(args.email, args.subject, args.message),
    },
  }),
});

export { informationsType };
