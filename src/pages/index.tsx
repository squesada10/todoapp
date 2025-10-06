import React from 'react';
import TodoTaskContainer from "../components/TodoTaskContainer"
import Head from 'next/head'


export default function Home() {
  return <>
    <Head>
      <title>toDoApp</title>
      <meta name="description" content="aplicacion de tareas" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <TodoTaskContainer />
  </>
}
