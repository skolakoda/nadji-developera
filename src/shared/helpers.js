export const filterDevelopers = (e, developers, callback) => {
  const skill = e.target.value
  const filtered = developers.filter(dev => dev.skills.includes(skill))
  callback(filtered)
}
