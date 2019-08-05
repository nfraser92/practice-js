const getJobs = () => {
    return fetch("https://api.stevebrownlee.com/jobs/")
        .then(r => r.json())
}

    const createHTML = (obj) => {
        return `
        <article class="card">
        <div>Company:${obj.organization}</div>
        <div>Role:${obj.role}</div>
        <div>Dates Employed:${obj.start_year} to ${obj.end_year}</div>
        `
    }

    getJobs()
    .then(jobs => {
      return jobs.results.reverse()
    })
    .then(sjobs => {
      const outputEl = document.querySelector("#output")
      sjobs.forEach(job => {
          outputEl.innerHTML += createHTML(job)
      })
    })