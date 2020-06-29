let players = [
    {
        id: 1,
        name: 'Giannis Antetokounmpo'
    },
    {
        id: 2,
        name: 'Kawhi Leonard'
    },
    {
        id: 3,
        name: 'LeBron James'
    },
    {
        id: 4,
        name: 'Stephen Curry'
    },
    {
        id: 5,
        name: 'James Harden'
    },
    {
        id: 6,
        name: 'Anthony Davis'
    },
    {
        id: 7,
        name: 'Joel Embiid'
    },
    {
        id: 8,
        name: 'Nikola Jokić'
    },
    {
        id: 9,
        name: 'Paul George'
    },
    {
        id: 10,
        name: 'Damian Lillard'
    },
    {
        id: 11,
        name: 'Jimmy Butler'
    },
    {
        id: 12,
        name: 'Russell Westbrook'
    },
    {
        id: 13,
        name: 'Karl-Anthony Towns'
    },
    {
        id: 14,
        name: 'Rudy Gobert'
    },
    {
        id: 15,
        name: 'Kyrie Irving'
    },
    {
        id: 16,
        name: 'LaMarcus Aldridge'
    },
    {
        id: 17,
        name: 'Draymond Green'
    },
    {
        id: 18,
        name: 'Al Horford'
    },
    {
        id: 19,
        name: 'Blake Griffin'
    },
    {
        id: 20,
        name: 'Kemba Walker'
    },
    {
        id: 21,
        name: 'Chris Paul'
    },
    {
        id: 22,
        name: 'Bradley Beal'
    },
    {
        id: 23,
        name: 'Ben Simmons'
    },
    {
        id: 24,
        name: 'Pascal Siakam'
    },
    {
        id: 25,
        name: 'Jrue Holiday'
    },
]


let id = 26;
module.exports = {
    getPlayer: (req, res) => {
        res.status(200).send(players)
    }
}