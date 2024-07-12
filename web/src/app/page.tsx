import { fetchPosts } from "@/db/queries/posts";
import Link from "next/link";
import PostDelete from "@/components/post-delete";
import { Button, Flex , Text} from "@chakra-ui/react";

export default async function Home() {
  const posts = await fetchPosts()


  
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return (
    <Flex h={'100vh'} w={'full'} bg={'whitesmoke'}>
        <Link href="/posts/create" className="bg-white px-4 py-2 rounded">
        <Text  textColor={'black'} variant=''>
        Create Post
        </Text>
        </Link>
 
      <Flex  w={'full'}>
      {posts.map(post => {
          return <Flex key={post.id}>
            <Flex>
              <Link
                key={post.id}
                href={`/posts/${post.id}/edit`}
                className=""
              >
               <Text textColor={'black'}>
               {post.title}
               </Text>
              </Link>
              <Text>
                {post.content}
              </Text>
            </Flex>
            <div className="text-sm opacity-30">{'Updated at ' + post.updatedAt.toLocaleDateString("en-US", dateOptions)}</div>
            <PostDelete id={post.id} />
          </Flex>
        })}
      </Flex>
    </Flex>
  );
}
