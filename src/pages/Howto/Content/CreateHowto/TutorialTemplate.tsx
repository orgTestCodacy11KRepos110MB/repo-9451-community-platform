import { IHowtoFormInput } from 'src/models/howto.models'

// initialise fields which contain nested objects (and steps to have 3 placeholders)
const INITIAL_VALUES: Partial<IHowtoFormInput> = {
  steps: [
    {
      title: '',
      text: '',
      images: [],
    },
    {
      title: '',
      text: '',
      images: [],
    },
    {
      title: '',
      text: '',
      images: [],
    },
  ],
  tags: {},
  tutorial_files: [],
}

const TIME_OPTIONS = [
  {
    value: '< 1 week',
    label: '< 1 week',
  },
  {
    value: '1-2 weeks',
    label: '1-2 weeks',
  },
  {
    value: '3-4 weeks',
    label: '3-4 weeks',
  },
  {
    value: '1+ months',
    label: '1+ months',
  },
]

const DIFFICULTY_OPTIONS = [
  {
    value: 'Easy',
    label: 'Easy',
  },
  {
    value: 'Medium',
    label: 'Medium',
  },
  {
    value: 'Hard',
    label: 'Hard',
  },
  {
    value: 'Very Hard',
    label: 'Very Hard',
  },
]

export default {
  INITIAL_VALUES,
  TIME_OPTIONS,
  DIFFICULTY_OPTIONS,
}
