import { SubModulePdf, SubModulePpt, SubModuleText, SubModuleVideo } from './module'

export interface Company {
  id: string
  name: string
  status: 'Actived' | string
  logo: string | null
  createdAt: string
  updatedAt: string
  deletedAt: string | null
}

export interface Position {
  id: string
  name: string
  createdAt?: string
  updatedAt?: string
  deletedAt?: string | null
}

export interface Division {
  id: string
  name: string
  description?: string
  AuthorId?: string
  createdAt?: string
  updatedAt?: string
  deletedAt?: string | null
  CompanyId?: string
}

export interface Role {
  id: string
  name: 'Member' | string
  createdAt: string
  updatedAt: string
  deletedAt: string | null
}

export interface Avatar {
  url: string
  id: string
  filename: string
  type: 'image' | string
  path: string
  createdAt: string
  updatedAt: string
}

export interface Profile {
  id: string
  fullName: string
  username: string
  email: string
  phone: string
  PositionId: string
  DivisionId: string
  RoleId: string
  AvatarId: string
  status: 'Actived' | string
  active: boolean
  createdAt: string
  updatedAt: string
  deletedAt: string | null
  SignatureId: string | null
  avatar: string
  isFirstTime: boolean
  CompanyId: string
  isLocked: boolean
  Company: Company
  Position: Position
  Division: Division
  Role: Role
  Avatar?: Avatar
  isAnsweredDailyQuestion: boolean
  isHaveTeam: boolean
  totalCourseDurationCompleted?: number
}

export interface CourseCategories {
  id: string
  CourseId: string
  CategoryId: string
  createdAt: string
  updatedAt: string
  CompanyId: string
}

export interface ImageCategories {
  createdAt: string
  filename: string
  id: string
  origin: string | null
  path: string
  type: string
  updatedAt: string
  url: string
}
export interface Categories {
  id: string
  name: string
  AuthorId?: string
  createdAt?: string
  updatedAt?: string
  deletedAt?: string | null
  CompanyId?: string
  ImageId?: string | null
  description?: string | null
  Author?: Author
  Divisions?: Division[]
  Image?: ImageCategories | null
  CourseCategories?: CourseCategories
}

export interface Level {
  id?: string | number
  name: string
  value?: number
}

export interface IconicPill {
  id?: string | number
  name: string
  value?: number
  icon: any
}

export interface Author {
  id: string
  fullName: string
  username?: string
  email?: string
  phone?: string
  DivisionId?: string
  RoleId?: string
  AvatarId?: string
  status?: 'Actived' | string
  active?: boolean
  createdAt?: string
  updatedAt?: string
  deletedAt?: string | null
  SignatureId?: string
  avatar?: string //url
  Avatar: { url: string }
  isFirstTime?: boolean
  CompanyId?: string
  isLocked?: boolean
}

export interface Cover {
  url: string
  id: string
  path: string
}

export interface Course {
  isParticipating: boolean
  isCanReview: boolean
  waitPermission: boolean
  ParticipantId: string | null
  hasAccess: boolean
  id: string
  title: string
  description: string //html tag
  level: 'Beginner' | 'Advanced' | 'Intermediate' | string
  duration: number
  isLocked: boolean
  status: 'Published' | 'Draft' | string
  totalParticipant: number
  totalHoursCourseVideo: number
  totalReadingMaterials: number
  certificateOfCompletion: boolean
  AuthorId: string
  FileId: string | null
  activeFrom: string
  activeTo: string
  publishedAt: string | null
  createdAt: string
  updatedAt: string
  deletedAt: string | null
  totalRequestParticipant: number
  QuizId: string | null
  isRecommended: boolean
  totalDownloableResource: number
  hideCover: boolean
  CompanyId: string
  Modules?: Module[]
  Categories?: Categories[]
  Ncrs: unknown[]
  Author: Author | null
  Cover: Cover | null
}

export interface Module {
  id: string
  title: string
  index: number
  CourseId: string
  AuthorId: string
  PreTestId: string | null
  PostTestId: string | null
  testDisabled: boolean
  status: 'Published' | 'Draft' | string
  publishedAt: string | null //'2021-09-30T13:31:26.000Z'
  createdAt: string //'2021-09-30T13:31:26.000Z'
  updatedAt: string //'2021-09-30T13:31:26.000Z'
  deletedAt: string | null
  totalDownloableResource: number
  totalHoursCourseVideo: number
  totalReadingMaterials: number
  duration: number //minutes
  CompanyId: string
  Course?: Course
  Author?: Author
  SubModules?: SubModule[]
  PreTest?: PreTest[]
  PostTest?: PostTest[]
}

export interface SubModule {
  id: string
  ModuleId: string
  AuthorId: string
  index: number
  title: string
  status: 'Published' | 'Draft' | string
  publishedAt: string | null
  createdAt: string
  updatedAt: string
  deletedAt: null
  totalDownloableResource: number
  totalHoursCourseVideo: number
  totalReadingMaterials: number
  duration: number
  CompanyId: string
  Author?: Author
  Module?: Module
  SubModulePpt?: SubModulePpt
  SubModulePdf?: SubModulePdf
  SubModuleText?: SubModuleText
  SubModuleVideo?: SubModuleVideo
}
export interface PreTest {
  id: string
  title: string
  durationValue: number
  index: number
}
export interface PostTest {
  id: string
  title: string
  durationValue: number
  index: number
}
interface Count {
  all: number
  draft: number
  published: number
  softdelete: number
}

interface ForumData {
  id: string
  title: string
  totalTopic: number
}
interface ForumParent {
  title?: string
}
export interface Forum {
  total?: number
  count?: Count
  parent?: ForumParent
  data?: ForumData[]
}

interface TopicForumData {
  id: string
  title: string
  message: string
  status: string
  totalThread: number
  ForumId: string
  ModuleId: string
  User: Profile
  createdAt?: string
  updatedAt?: string
  deletedAt?: string | null
  showMore?: boolean
}
export interface TopicForum {
  total?: number
  count?: Count
  data?: TopicForumData[]
}

interface ThreadDiscussData {
  id: string
  title: string
  message: string
  User: Profile
  isAnswer: boolean
  createdAt?: string
  updatedAt?: string
  deletedAt?: string | null
  showMore?: boolean
}

export interface ThreadDiscuss {
  total?: number
  data?: ThreadDiscussData[]
  parent?: ThreadDiscussData
}

export interface Leaderboard {
  id: string
  totalScorePercentage: number
  finalTestScorePercentage: number
  totalScorePercentageRankPerDivision: number
  finalTestScorePercentageRankPerDivision: number
  totalScorePercentageRankPerCourse: number
  finalTestScorePercentageRankPerCourse: number
  Participant: {
    fullName: string
    Division: {
      name: string
    }
  }
}

export enum ContentFlag {
  test = 'Test',
  mix = 'Mix',
  text = 'Text',
  pdf = 'Pdf',
  file = "File",
  video = 'Video',
}

export enum AnswerType {
  singleChoice = 'Single',
  multipleChoice = 'Multiple',
  linearScale = 'Linear Scale',
  essay = 'Essay',
  uploadVideo = 'Upload Video',
  uploadFile = 'Upload File',
  liveStreaming = 'Live Streaming',
}

export enum DurationUnit {
  second = 'Second',
  minute = 'Minute',
  hour = 'Hour',
}
