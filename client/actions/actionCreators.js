
export function search(name) {
  return {
    type: 'SEARCH',
    name
  }

}

export function mousenter(item, key) {
  return {
    type: 'MOUSENTER',
    item,
    key
  }
}

export function mouseleave(item, key) {
  return {
    type: 'MOUSELEAVE',
    item,
    key
  }
}

export function selectdesignation(designation) {
  return {
    type: 'SELECTDESIGNATION',
    designation
  }
}

export function deselectdesignation(designation) {
  return {
    type: 'DESELECTDESIGNATION',
    designation
  }
}

export function selectteam(team) {
  console.log(team)
  return {
    type: 'SELECTTEAM',
    team
  }
}

export function deselectteam(team) {
  console.log(team)
  return {
    type: 'DESELECTTEAM',
    team
  }
}

