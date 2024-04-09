import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import styles from '../components/layout.module.css'


export default function About() {
  return (
    <div className={styles.container}>
    	<h3>about</h3>
      My name is Bartosz and I'm from Kraków, Poland. <br/>I'm rappin' in my native language which is a polish language <br />so I want to post the translations
      of my lyrics (in english) <br />and my thoughts.<br/> Remember rap is starting from the thoughts. <br />If you want some co-op you are invited.<br />
      Send me a message on my instagram. <br />Peace
		<h3 className={styles.backToHome}>
        	<Link href="/">
        		← Back to home
         	</Link>
    	</h3>	
	</div>
)}
