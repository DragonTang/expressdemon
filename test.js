var getCookie = (cName) => {
  let cStart, cEnd
  if (document.cookie.length) {
    cStart = document.cookie.indexOf(cName + '=')
    if (cStart !== -1) {
      cStart = cStart + cName.length + 1
      cEnd = document.cookie.indexOf(';', cStart)
      if (cEnd === -1) return document.cookie.substr(cStart, document.cookie.length)
      return document.cookie.substr(cStart, cEnd - cStart)
    }
  }
  return ''
}
