import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/nav/Nav'
import {Switch,BrowserRouter, Route} from 'react-router-dom'
import Home from '../components/home/home'

export default function index() {
  return (
    <>
      <Home/>
    </>
  )
}
