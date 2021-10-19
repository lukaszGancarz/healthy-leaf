class Flower {
  constructor(
    id,
    categoryId,
    title,
    description,
    photo,
    temp,
    palm,
    likeSun,
    likeDark,
    needALotOfWater,
    dontNeedALotOfWater,
    easy,
    hard,
    toxic,
    howOftenToWater,
    howOftenToFertilize
  ) {
    this.id = id;
    this.categoryId = categoryId;
    this.title = title;
    this.description = description;
    this.photo = photo;
    this.temp = temp;
    this.palm = palm;
    this.likeSun = likeSun;
    this.likeDark = likeDark;
    this.needALotOfWater = needALotOfWater;
    this.dontNeedALotOfWater = dontNeedALotOfWater;
    this.easy = easy;
    this.hard = hard;
    this.toxic = toxic;
    this.howOftenToWater = howOftenToWater;
    this.howOftenToFertilize = howOftenToFertilize;
  }
}

export default Flower;
