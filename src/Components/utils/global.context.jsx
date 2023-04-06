export const getFeaturedDentists = () => {
  return JSON.parse(localStorage.getItem("favs") || "[]");
}

export const toggleFeaturedDentist = (den) => {
  if(den === null || den === undefined){
    return;
  }

  var favs = getFeaturedDentists();

  if (!exists(favs, den)) {
    favs.push(den);
  } else {
    deleteFromList(favs, den);
  }
  localStorage.setItem("favs", JSON.stringify(favs));
};

export const exists = (favs, den) => {
  for (let index = 0; index < favs.length; index++) {
    const element = favs[index];
    if (element.id === den.id) {
      return true;
    }
  }
  return false;
}

const deleteFromList = (list, den) => {
  let index = -1;
  let found = false;
  for (let i = 0; i < list.length && !found; i++) {
    const element = list[i];
    if(element.id === den.id){
      index = i;
      found = true;
    }
  }

  if(index === -1){
    return false;
  }

  var deleted = list.splice(index, 1);
  return deleted[0].id === den.id;
}
