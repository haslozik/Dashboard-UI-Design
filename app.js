// clock
function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    
    document.getElementById("middleContent__clock").innerText = time;
    document.getElementById("middleContent__clock").textContent = time;
    
    setTimeout(showTime, 1000);
}

showTime();

// charts
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jun 21', 'Jun 22', 'Jun 23', 'Jun 24', 'Jun 25', 'Jun 26'],
        datasets: [{
            label: '# of Votes',
            data: [0.5, 1, 1, 2, 4, 6],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
              display: false
            }
          }
    }
});


