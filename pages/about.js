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
		<h3 className={styles.backToHome}>
        	<Link href="/">
        		← Back to home
         	</Link>
    	</h3>	
	</div>
)}
