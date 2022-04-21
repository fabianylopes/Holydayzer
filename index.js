import express from 'express';

const server = express();

server.listen(4000, () => {
    console.log('Servidor iniciado em http://localhost:4000');
});

server.get('/holidays', (req, res) => {
    res.send(holidays);
});

server.get('/holidays/:monthId', (req, res) => {
    const month = holidays.filter(holiday => holiday.date.split('/')[0] === req.params.monthId);
    res.send(month);
})

server.get('/is-today-holiday', (req, res) => {
    const hoje = new Date();
    const todayHoliday = holidays.find(holiday => holiday.date === hoje.toLocaleDateString());

    if(todayHoliday){
        res.send(`Sim, hoje é ${todayHoliday.name}.`);
    }else {
        res.send('Não, hoje não é feriado.');
    }
})

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
  ];
