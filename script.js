const elm_input = document.querySelector("#input");
const elm_output = document.querySelector("#output");

/*
18:45  23:15  
17:15  22:35  
19:30  23:35  
17:50  23:40  
19:35  23:45  
08:15  12:50  
19:30  23:50  
18:50  23:55  
20:25  23:59  
18:40  23:59  
08:15  13:30  
15:20  19:30  
14:00  19:10  
18:30  23:59  
19:10  23:59
*/
// Functions
const split_ranges = (text) => {
    const lines = text.trim().split('\n');
    const ranges = lines.map(line => line.trim().split(/\s+/));
    return ranges;
};
  
const extract_times = (text) => {
    const ranges = split_ranges(text);
    let sum = 0;

    elm_output.innerHTML = "";
    for (const range of ranges) {
        const startTime = range[0];
        const endTime = range[1];

        const [startHour, startMinute] = startTime.split(':');
        const [endHour, endMinute] = endTime.split(':');

        const start = parseInt(startHour) * 60 + parseInt(startMinute);
        const end = parseInt(endHour) * 60 + parseInt(endMinute);
        const diff = end - start;

        console.log(`Start: ${startTime}, End: ${endTime}, Diff: ${diff} minutes`);
        elm_output.innerHTML += `Start: ${startTime}, End: ${endTime}, Diff: ${diff} minutes<br>`;

        sum += diff;
    }

    console.log(`Sum of all differences: ${sum} minutes`);
    elm_output.innerHTML += `Sum of all differences: ${sum} minutes`;
};

// Events
elm_input.addEventListener('change', () => {
    const inputText = elm_input.value;
    extract_times(inputText);
});
