function skillsMember() {
  const member = document.querySelector('.member')
  member.addEventListener('click', () => {
    const memberSkills = document.querySelector('.member-skills')
    memberSkills.classList.toggle('hidden')
  })
}