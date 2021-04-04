/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
      `Den här applikationen har fått en uppdatering. ` +
        `Vänligen uppdatera sidan för nyaste versionen.`
    )
    if (answer === true) {
      window.location.reload()
    }
  }
