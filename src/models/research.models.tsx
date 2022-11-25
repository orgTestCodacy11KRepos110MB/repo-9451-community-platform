import type { IConvertedFileMeta } from '../types'
import type { DBDoc, IComment, IModerable, ISelectedTags } from '.'
import type { IUploadedFileMeta } from '../stores/storage'

/**
 * Research retrieved from the database also include metadata such as _id, _created and _modified
 */
export type IResearchDB = IResearch.ItemDB & DBDoc

export type IResearchStats = {
  votedUsefulCount: number
}

/** All typings related to the Research Module can be found here */
export namespace IResearch {
  /** The main research item, as created by a user */
  export interface Item extends FormInput {
    updates: Update[]
    _createdBy: string
  }

  /** A research item update */
  export interface Update {
    title: string
    description: string
    images: Array<IUploadedFileMeta | IConvertedFileMeta | null>
    videoUrl?: string
    comments?: IComment[]
  }

  export interface FormInput extends IModerable {
    title: string
    description: string
    slug: string
    tags: ISelectedTags
    creatorCountry?: string
  }

  /** Research items synced from the database will contain additional metadata */
  // Use of Omit to override the 'updates' type to UpdateDB
  export type ItemDB = Omit<Item, 'updates'> & {
    updates: UpdateDB[]
    collaborators?: string
  } & DBDoc

  export type UpdateDB = Update & DBDoc
}
