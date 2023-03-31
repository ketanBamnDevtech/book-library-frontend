import React from 'react'
import DynamicLayout from '@/components/layout/dynamic'
import { GET_ALL_BOOKS } from '@/gql/bookQueries';
import { client } from '@/gql';
import { GetServerSideProps } from 'next';
import BookList from '@/components/allBooks';


interface dashboardProps {
  data: object | any
}

function DashBoard({ data }: dashboardProps) {
  const { books } = data?.allBooks

  return (
    <DynamicLayout isPrivate>
      <BookList booksdata={books} />
    </DynamicLayout>
  )
}

export const getServerSideProps: GetServerSideProps<any> = async (context: any) => {
  // Fetch data from external API
  await client.query({
    query: GET_ALL_BOOKS
  });

  const { data } = await client.query({
    query: GET_ALL_BOOKS,
  });

  return {
    props: {
      data,
    },
  };
}

export default DashBoard;

