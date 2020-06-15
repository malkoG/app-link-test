import Head from 'next/head'
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [scheme, setScheme] = useState('kodingwarrior')
  const [host, setHost] = useState('kodingwarrior.dev')
  const [pathPrefix, setPathPrefix] = useState('detail')
  const [parameter, setParameter] = useState('1')
  const [projectName, setProjectName] = useState('app')

  const [marketLink, setMarketLink] = useState('')
  const [appLink, setAppLink] = useState('')
  const [intentLink, setIntentLink] = useState('')

  useEffect(() => {
    const [domain1, domain2] = host.split('.')
    const marketRewrittenUrl = encodeURI(`link://${host}/${pathPrefix}?id=${parameter}`)
    const resultMarketLink = `market://details?id=${domain2}.${domain1}.${projectName}&link=${marketRewrittenUrl}`
    const resultIntentLink = `intent://${host}/${pathPrefix}?id=${parameter}`

    setMarketLink(resultMarketLink)
    setAppLink(`https://${host}/${pathPrefix}?id=${parameter}`)
  }, [scheme, host, pathPrefix, parameter, projectName])

  return (
    <div className="container">
      <Head>
        <title>Android App Link Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <input placeholder="scheme"
               value={scheme}
               onChange={scheme => setScheme(scheme)} />
        <input placeholder="host"
               value={host}
               onChange={host => setHost(host)} />
        <input placeholder="host"
               value={pathPrefix}
               onChange={pathPrefix => setPathPrefix(pathPrefix)} />
        <input placeholder="parameter"
               value={parameter}
               onChange={parameter => setParameter(parameter)} />
        <input placeholder="project name"
               value={projectName}
               onChange={project => setProjectName(project)} />

        <a href={marketLink}>Market Link</a>
        <a href={appLink}>App Link</a>
      </main>

      <style jsx>{`

      `}</style>

      <style jsx global>{`
      `}</style>
    </div>
  )
}
