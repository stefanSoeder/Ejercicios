// Blast Off 🚀

const blastOff = () => {
  for (let i = 10; i >= 0; i--) {
    if (i > 0) {
      console.log(`${i}`);
    } else {
      console.log("Blast Off!🚀");
    }
  }
};
blastOff();

// E=mc2 ⚖️

const relativityTheory = (number) => {
  const speedOfLight = 3e8;
  let Energy = number * speedOfLight ** 2;
  return Energy;
};
const mass = 85;
const calculatedEnergy = relativityTheory(mass);
console.log("🚀 ~ calculatedEnergy:", calculatedEnergy);

// Clout 📊

const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];

const mean = (viewsArray) => {
  let totalViews = 0;
  viewsArray.forEach((element) => {
    totalViews += element;
  });
  return totalViews / viewsArray.length;
};

const averageTt = mean(recentTikTokViews);
console.log("🚀 ~ averageTt:", averageTt);

const median = (viewsArray) => {
  let sortArray = viewsArray.sort((a, b) => a - b);
  console.log("🚀 ~ median ~ sortArray:", sortArray);
  let value1 = sortArray[3];
  return value1;
};
const medianTt = median(recentTikTokViews);
console.log("🚀 ~ medianTt:", medianTt);

console.log(`
Tik Tok
Mean: ${mean(recentTikTokViews)}
Median: ${median(recentTikTokViews)}

Instagram
Mean: ${mean(recentInstagramViews)}
Median: ${median(recentInstagramViews)}

Youtube
Mean:${mean(recentYouTubeViews)}
Median:${median(recentYouTubeViews)}`);
