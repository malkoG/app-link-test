import Head from 'next/head'
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [scheme, setScheme] =  localStorage.getItem("__SCHEME__") || useState('kodingwarrior')
  const [host, setHost] = localStorage.getItem("__HOST__") || useState('kodingwarrior.dev')
  const [pathPrefix, setPathPrefix] = localStorage.getItem("__PATH_PREFIX__") || useState('detail')
  const [parameter, setParameter] = localStorage.getItem("__PARAMETER__") || useState('1')
  const [projectName, setProjectName] = localStorage.getItem("__PROJECT__") || useState('app')

  const [marketLink, setMarketLink] = useState('')
  const [appLink, setAppLink] = useState('')
  const [customLink, setCustomLink] = useState('')
  const [intentLink, setIntentLink] = useState('')

  useEffect(() => {
    const [domain1, domain2] = host.split('.')
    const resultCustomLink = `${scheme}://${host}/${pathPrefix}?id=${parameter}`
    const marketRewrittenUrl = encodeURI(resultCustomLink)
    const resultMarketLink = `market://details?id=${domain2}.${domain1}.${projectName}&link=${marketRewrittenUrl}`
    const resultIntentLink = `intent://${host}/${pathPrefix}?id=${parameter}`

    setMarketLink(resultMarketLink)
    setCustomLink(resultCustomLink)
    setAppLink(`https://${host}/${pathPrefix}?id=${parameter}`)
  }, [scheme, host, pathPrefix, parameter, projectName])

  function syncStorage(key, event, setCallback) {
    localStorage.setItem(key, event.target.value);
    setCallback(event.target.value);
  }

  return (
    <div className="container">
      <Head>
        <title>Android App Link Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <input placeholder="scheme"
               value={scheme}
               onChange={e => syncStorage("__SCHEME__", e, setScheme) } />
        <input placeholder="host"
               value={host}
               onChange={e => syncStorage("__HOST__", e, setHost) } />
        <input placeholder="host"
               value={pathPrefix}
               onChange={e => syncStorage("__PATH_PREFIX__", e, setPathPrefix) } />
        <input placeholder="parameter"
               value={parameter}
               onChange={e => syncStorage("__PARAMETER__", e, setParameter) } />
        <input placeholder="project name"
               value={projectName}
               onChange={e => syncStorage("__PROJECT__", e, setProjectName) } />

        <table>
          <thead>
            <tr>
              <th>type of link</th>
              <th>link url</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Market Link</td>
              <td>
                <a href={marketLink}>{marketLink}</a>
              </td>
            </tr>
            <tr>
              <td>App Link</td>
              <td>
                <a href={appLink}>{appLink}</a>
              </td>
            </tr>
            <tr>
              <td>Custom Link</td>
              <td>
                <a href={customLink}>{customLink}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </main>

      <style jsx>{`

      `}</style>

      <style jsx global>{`
      `}</style>
    </div>
  )
}
