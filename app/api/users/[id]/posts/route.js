import Prompt from '@models/Prompt'
import { connectToDB } from '@utils/database'

export const GET = async (req, { params }) => {
  const { id } = params

  try {
    await connectToDB()

    const prompts = await Prompt.find({ creator: id }).populate('creator')

    return new Response(JSON.stringify(prompts), { status: 200 })
  } catch (error) {
    return new Response('Failed to fetch all prompts', { status: 500 })
  }
}
