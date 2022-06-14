const topTooltipText = document.getElementById('top-tooltip-text');
const topSource = document.getElementById('top-source');
const bottomTooltipText = document.getElementById('bottom-tooltip-text');
const bottomSource = document.getElementById('bottom-source');
const leftTooltipText = document.getElementById('left-tooltip-text');
const leftSource = document.getElementById('left-source');
const rightTooltipText = document.getElementById('right-tooltip-text');
const rightSource = document.getElementById('right-source');

const showTooltipText = (tooltipText) => {
    tooltipText.style.display = 'block';
};

const hideTooltipText = (tooltipText) => {
    tooltipText.style.display = 'none';
};
//top tooltip
topSource.addEventListener('mouseover', () => showTooltipText(topTooltipText), false);

topSource.addEventListener('mouseout', () => hideTooltipText(topTooltipText), false);

topSource.addEventListener('focus', () => showTooltipText(topTooltipText), false);

topSource.addEventListener('blur', () => hideTooltipText(topTooltipText), false);

//bottom tooltip
bottomSource.addEventListener('mouseover', () => showTooltipText(bottomTooltipText), false);

bottomSource.addEventListener('mouseout', () => hideTooltipText(bottomTooltipText), false);

bottomSource.addEventListener('focus', () => showTooltipText(bottomTooltipText), false);

bottomSource.addEventListener('blur', () => hideTooltipText(bottomTooltipText), false);

//left tooltip
leftSource.addEventListener('mouseover', () => showTooltipText(leftTooltipText), false);

leftSource.addEventListener('mouseout', () => hideTooltipText(leftTooltipText), false);

leftSource.addEventListener('focus', () => showTooltipText(leftTooltipText), false);

leftSource.addEventListener('blur', () => hideTooltipText(leftTooltipText), false);

//right tooltip
rightSource.addEventListener('mouseover', () => showTooltipText(rightTooltipText), false);

rightSource.addEventListener('mouseout', () => hideTooltipText(rightTooltipText), false);

rightSource.addEventListener('focus', () => showTooltipText(rightTooltipText), false);

rightSource.addEventListener('blur', () => hideTooltipText(rightTooltipText), false);