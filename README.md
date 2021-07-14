# Data Visualization Exercise

### How to Spin Up
1. Run `yarn install` in root folder to install dependencies
2. Run `yarn start` to spin up server on `localhost:3000`

### Screenshot and Video
![app_screenshot](https://user-images.githubusercontent.com/57693937/125630625-f3668008-f078-4f41-8ebd-16591814895d.jpg)

https://user-images.githubusercontent.com/57693937/125634378-72dea37d-fde7-41c3-82e5-4bb3b9bfc5e5.mp4


### Process

This is a vanilla React app with only [chartjs](https://www.chartjs.org/) and [react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2) (a React wrapper for chartjs) as dependencies.  I also considered [these](https://uber.github.io/react-vis/) [two](https://airbnb.io/visx/) charting libraries from Uber and Airbnb but ultimately chose chartjs for it's simplicity.  All styling is done with vanilla CSS, no design system libraries are included.

I converted CSV row data to JSON objects for ease of use and used React state to manage user input and slice/combine datasets.  Working within the limitations of the charting library I chose two charts to visualize data.  A stacked bar chart to measure viewership numbers within columns and a donut/pie chart to compare percentages/proportions across columns.

I was able to achieve those fairly complex interactions with 5 reasonably sized, strategically encapsulated React components.


### Potential Optimizations

#### Code

1. Improve naming conventions.  Was moving quickly, some of the variable and method names are oblique/unhelpful.  User facing naming conventions also need refinement.

2. Preprocess incoming data.  Some data is being processed and reprocessed inefficiently during React re-renders.  Might not scale well if the data set is much larger.  Could make an initial query and preprocess/prepare the data during page load.

#### UX
1. More focused analysis.  Data analysis may actually be too flexible (over anticipating use cases)?  Limiting/focusing what the user can do would result in a better experience/more useful app.  Could be solved by a meeting with stakeholders, i.e. ask what kind of comparisons/dashboards would be most valuable to them.

2. Create select all and deselect all buttons beneath the checkbox columns.  It’s a bit tedious to click each checkbox when you want an entire column selected.

#### Design

1. Address bar chart height resizing.  The legend compresses the bar charts height.  Ideally each chart would be a column in the same chart (i.e. one chart with 4 horizontal bars, not 4 separate charts).  I had to work with the limitations of the charting library.

2. Improve checkbox column alignment.  The checkbox columns are sort of floating and aren’t effectively associated with their corresponding charts.  Lots of whitespace between them.  Might be worth finding a different way to get multi-select user input altogether.

3. Checkbox colors.  The checkbox colors cannot be overridden by css in the browser.  Have created custom checkboxes in the past but it’s time intensive.  Felt my time was better spent elsewhere on this project.

4. Not mobile friendly.
