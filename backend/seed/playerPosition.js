const db = require('../db')
const { Player, Position } = require('../models')


db.on('error', console.error.bind(console, 'MongoDb connection erorr:'))

const main = async () => {
    const center = await new Position({
        name: "Center",
        description: "The center is the tallest player on each team, playing near the basket. On offense, the center tries to score on close shots and rebound. But on defense, the center tries to block opponents’ shots and rebound their misses.",
    })
    center.save()
    
    const forward = await new Position({
        name: "Forward",
        description: "There are two types of forward. The power forward does many of the things a center does, playing near the basket while rebounding and defending taller players. But power forwards also take longer shots than centers. The small forward plays against small and large players. They roam all over on the court. Small forwards can score from long shots and close ones.",
    })
    forward.save()
    
    const guard = await new Position({
        name: "Guard",
        description: "There are also two types of guard. The point guard runs the offense and usually is the team’s best dribbler and passer. The point guard defends the opponent’s point guard and tries to steal the ball. The shooting guard is usually the team’s best shooter. The shooting guard can make shots from long distance and also is a good dribbler.",
    })
    guard.save()




    const players = [
        {
            name: "Kareem Abdul-Jabbar",
            position: center._id,
            points: "38,387",
            rebounds: "17,440",
            assists: "5,660",
            championships: "6 times (1971, 1980, 1982, 1985, 1987, 1988)",
            HoFYear: "1995",
            bioHighlight: "GAME-CHANGING IMPACT ON AND OFF COURT.",
            biography: "Kareem Abdul-Jabbar is perhaps the most accomplished player in NBA history, collecting Rookie of the Year honors, six NBA MVPs, two Finals MVPs and six NBA titles. He was one of the most consistent players in league history and still stands as the game's all-time leading scorer.",
            image: "https://cdn.nba.com/manage/2021/10/kareem_abdul_Jabbar6-scaled.jpg",
        },
        {
            name: "Michael Jordan",
            position: guard._id,
            points: "32,292",
            rebounds: "6,672",
            assists: "5,633",
            championships: " 6 times (1991, 1992, 1993, 1996, 1997, 1998)",
            HoFYear: "2009",
            bioHighlight: "A LEGACY OF CULTURAL GAME-CHANGING.",
            biography: "Arguably the greatest player in NBA history, and widely acclaimed as the most potent scorer with 10 scoring titles, Michael Jordan boasts a lifetime average of 30.1 and a 33.5 average in the postseason (all NBA records).",
            image: "https://cdn.nba.com/manage/2021/10/michaeljordan_2-scaled.jpg",
        },
        {
            name: "Bill Russell",
            position: center._id,
            points: "14,522",
            rebounds: "21,620",
            assists: "4,100",
            championships: "11 times (1957, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1968, 1969)",
            HoFYear: "1975",
            bioHighlight: "A LASTING LEGACY THAT BROKE BARRIERS.",
            biography: "With 11 championships to his name, Bill Russell is cemented as arguably the greatest winner in NBA history. The five-time MVP averaged 15.1 points and 22.5 rebounds per game (second all-time) in his 13-year career and with him at the helm, the Celtics were a dynasty in the late 1950s and early '60s, winning 11 championships and making 12 NBA Finals in 13 seasons.",
            image: "https://cdn.nba.com/manage/2021/10/bill_russell6-scaled.jpg",
        },
        {
            name: "Lebron James",
            position: forward._id,
            points: "37,024",
            rebounds: "10,203",
            assists: "10,041",
            championships: "4 times (2012, 2013, 2016, 2020)",
            HoFYear: "TBD",
            bioHighlight: "RARE COMBINATION OF SIZE, SKILL AND SAVVY.",
            biography: "A contender for the moniker of best NBA player of all time, LeBron James appears to be the rare case of a player seemingly performing in his prime over the course of nearly 20 years. A four-time MVP, four-time NBA champion and four-time Finals MVP, James turns 37 in December, but has averaged at least 25 points in every season except his rookie year (2003-04), in which he won Rookie of the Year.",
            image: "https://cdn.nba.com/manage/2021/10/lebronjames_9-scaled.jpg",
        },
        {
            name: "Wilt Chamberlain",
            position: center._id,
            points: "31,419",
            rebounds: "23,924",
            assists: "4,643",
            championships: "2 times (1967, 1972)",
            HoFYear: "1979",
            bioHighlight: "A PHENOMENAL TALENT THAT DID IT ALL.",
            biography: "Wilt Chamberlain, one of the most unstoppable forces the league has ever seen, retired as a four-time MVP, a two-time NBA champion and the first player to ever score 30,000 points.",
            image: "https://cdn.nba.com/manage/2020/10/wilt-chamberlain-100-points2-784x522.jpg",
        },
        {
            name: "Magic Johnson",
            position: guard._id,
            points: "17,707",
            rebounds: "6,559",
            assists: "10,141",
            championships: "5 times (1980, 1982, 1985, 1987, 1988)",
            HoFYear: "2002",
            bioHighlight: "PURE BRILLIANCE REVOLUTIONIZED THE GAME.",
            biography: "The 6-foot-9 point guard made an immediate impact with the Lakers as he ushered the NBA into a new era with his dazzling passing skills and playmaking ability. He averaged 18.0 points, 7.7 rebounds and 7.3 assists per game during his rookie season and was named an All-Star starter. Alongside Kareem Abdul-Jabbar, Johnson and the Lakers finished the regular season with the top seed in the Western Conference.",
            image: "https://cdn.nba.com/manage/2021/10/JohnsonM90DTB900-scaled.jpg",
        },
        {
            name: "Larry Bird",
            position: forward._id,
            points: "21,791",
            rebounds: "8,974",
            assists: "5,695",
            championships: "3 times (1981, 1984, 1986)",
            HoFYear: "1998",
            bioHighlight: "EXPLOSIVE PLAYMAKING AND A DEADLY SHOT.",
            biography: "A skilled scorer, passer, rebounder and clutch performer, Larry Bird is one of the all-time best all-around players in NBA history. A three-time MVP, Bird won a pair of Finals MVPs and led the Boston Celtics to five NBA Finals appearances and three NBA championships. He is the only person in NBA history to win MVP (1984-86; Celtics), Coach of the Year (Pacers; 1998) and Executive of the Year (Pacers; 2012) in a career.",
            image: "https://cdn.nba.com/manage/2021/10/larrybird_8-scaled.jpg",
        },
        {
            name: "Moses Malone",
            position: center._id,
            points: "27,409",
            rebounds: "16,212",
            assists: "1,796",
            championships: "1 time (1983)",
            HoFYear: "2001",
            bioHighlight: "GENIUS IN THE PAINT THAT MADE IT HAPPEN.",
            biography: "One of the most imposing big men in history, Moses Malone is a three-time MVP, a 12-time All-Star, an NBA champion and the 1983 Finals MVP.",
            image: "https://cdn.nba.com/manage/2021/10/MaloneMoses_94NSBB11159-scaled.jpg",
        },
        {
            name: "Giannis Antetokounmpo",
            position: forward._id,
            points: "12,319",
            rebounds: "5,371",
            assists: "2,632",
            championships: "1 time (2021)",
            HoFYear: "TBD",
            bioHighlight: "AN UNWAVERING WILL TO WIN AND GROW.",
            biography: "Giannis Antetokounmpo has gone from Draft-day gem to one of the best overall NBA players of his generation and, perhaps, league history in very short order. Since debuting in the NBA in 2013, he has been named Most Improved Player, Kia MVP (twice), Defensive Player of the Year and Finals MVP all while helping Milwaukee win a title in 2021, its first since 1971.",
            image: "https://cdn.nba.com/manage/2021/10/giannis_antetokounmpo11-scaled.jpg",
        },
        {
            name: "Stephen Curry",
            position: guard._id,
            points: "18,434",
            rebounds: "3,503",
            assists: "4,984",
            championships: "3 times (2015, 2017, 2018)",
            HoFYear: "TBD",
            bioHighlight: "ELITE SHOOTER REIGNING SUPREME.",
            biography: "Physically unimposing but remarkably elusive and efficient, Stephen Curry is widely touted as the best pure shooter in NBA history. Credited with transforming the league, extending the offensive zone out to 30 feet or beyond with his frequency and accuracy on 3-point attempts.",
            image: "https://cdn.nba.com/manage/2021/10/GettyImages-1235702119.jpg",
        },
        {
            name: "Steve Nash",
            position: guard._id,
            points: "17,387",
            rebounds: "3,642",
            assists: "10,335",
            championships: "None",
            HoFYear: "2018",
            bioHighlight: "REMARKABLY EFFICIENT OFFENSIVE POWER",
            biography: "Steve Nash is considered one of the best passers to ever grace the game after earning five single-season assist crowns and ranking fourth all-time on the NBA career assists list. His playmaking served as a historic engine and the Hall of Fame point guard's teams ranked No.1 in the league in offensive rating in eight out of nine seasons (2002-07, 2009-10).",
            image: "https://cdn.nba.com/manage/2021/10/GettyImages-57558953-scaled.jpg",
        },
        {
            name: "Tim Duncan",
            position: forward._id,
            points: "26,496",
            rebounds: "15,091",
            assists: "4,225",
            championships: "5 times (1999, 2003, 2005, 2007, 2014)",
            HoFYear: "2020",
            bioHighlight: "IMPECCABLE DEFENSE AND ABILITY TO ADAPT.",
            biography: `"The Big Fundamental" is widely regarded as arguably the greatest power forward in NBA history, a dominant defensive anchor and low-post scorer who led the Spurs to five championships over 19 seasons while amassing several individual honors.`,
            image: "https://cdn.nba.com/manage/2021/10/tonyparker_7-scaled.jpg",
        },
        {
            name: "Karl Malone",
            position: forward._id,
            points: "36,928",
            rebounds: "14,968",
            assists: "5,248",
            championships: "None",
            HoFYear: "2010",
            bioHighlight: "A PROLIFIC SCORER THAT ALWAYS DELIVERED.",
            biography: "A bruising, powerful low-post scorer, Karl Malone finished his career with 36,928 points — second only in NBA history to Kareem Abdul-Jabbar. He was a two-time MVP, a 14-time All-NBA performer and played in 82 games in 10 of his 19 NBA seasons.",
            image: "https://cdn.nba.com/manage/2021/10/karl_malone2-scaled.jpg",
        },
        {
            name: "Bob Pettit",
            position: forward._id,
            points: "20,880",
            rebounds: "12,849",
            assists: "2,369",
            championships: "1 time (1958)",
            HoFYear: "1971",
            bioHighlight: "A RELENTLESS ATHLETE ON AND OFF COURT.",
            biography: "Bob Pettit was one of the NBA's first truly great scorers, playing 11 seasons and amassing 20,000 points — the first player in NBA history to reach that mark. He never finished lower than seventh in the NBA scoring race in each of his seasons. The best forward of his era that spanned the 1950s and early '60s, Pettit was an All-Star every season, an All-NBA First Team pick 10 times and made an All-NBA Second Team.",
            image: "https://cdn.nba.com/manage/2021/10/bob_pettit4-scaled.jpg",
        },
        {
            name: "James Harden",
            position: guard._id,
            points: "22,045",
            rebounds: "4,794",
            assists: "5,730",
            championships: "None",
            HoFYear: "TBD",
            bioHighlight: "UNCANNY SKILL AND CONTROL OF THE GAME.",
            biography: "From a super sub to a superstar, James Harden's career journey in the NBA has been marked by success -- particularly as a go-to scorer. By his fourth NBA season, Harden was averaging 25 ppg or more and has collected three scoring crowns, a Kia MVP and been a part of several long playoff runs.",
            image: "https://cdn.nba.com/manage/2021/10/james_harden12-scaled.jpg",
        },
        {
            name: "Russell Westbrook",
            position: guard._id,
            points: "21,857",
            rebounds: "6,961",
            assists: "8,061",
            championships: "None",
            HoFYear: "TBD",
            bioHighlight: "SHOWSTOPPING GAME AND FASHION.",
            biography: "Russell Westbrook is one of the most dynamic players the league has ever seen. The 6-foot-3 point guard is no stranger to the NBA’s record books, largely due to his combination of scoring, playmaking and ability to attack the glass.",
            image: "https://cdn.nba.com/manage/2021/10/GettyImages-463541414-scaled.jpg",
        },
        {
            name: "Kevin Durant",
            position: forward._id,
            points: "23,883	",
            rebounds: "6,239",
            assists: "3,681",
            championships: "2 times (2017, 2018)",
            HoFYear: "TBD",
            bioHighlight: "UNSTOPPABLE FORCE. UNLIMITED ABILITY.",
            biography: "One of the league’s most lethal scorers, Kevin Durant is a two-time NBA champion, former Rookie of the Year (2008), a four-time scoring champion (2010-14), an MVP and a two-time Finals MVP. Durant’s four scoring titles ties George Gervin and Allen Iverson for the third-most in NBA history.",
            image: "https://cdn.nba.com/manage/2021/10/kevin_durant5-scaled.jpg",
        },
        {
            name: "Kobe Bryant",
            position: guard._id,
            points: "33,643",
            rebounds: "7,047",
            assists: "6,306",
            championships: "5 times (2000, 2001, 2002, 2009, 2010)",
            HoFYear: "2020",
            bioHighlight: "LEGACY OF UNWAVERED PASSION AND WORK ETHIC.",
            biography: "An iconic player on one of the NBA's best-known franchises, Kobe Bryant amassed a career that stands out. He was league MVP, a two-time Finals MVP, is the Lakers' all-time leading scorer and, for many, is in the discussion of the greatest player of all time in NBA history thanks to his starring role in five different Lakers championship teams of the early 2000s.",
            image: "https://cdn.nba.com/manage/2021/10/kobebryant_4-scaled.jpg",
        },
        {
            name: "Dirk Nowitzki",
            position: forward._id,
            points: "31,560",
            rebounds: "11,489",
            assists: "3,651",
            championships: "1 time (2011)",
            HoFYear: "TBD",
            bioHighlight: "A FADEAWAY MADE FOR THE LIMELIGHT.",
            biography: "The son of elite athletes — father Jörg-Werner represented Germany as an international handball player, while mother Helga played basketball professionally -— Nowitzki turned pro himself at 16 years old with the local club in his hometown of Wurzburg.",
            image: "https://cdn.nba.com/manage/2021/10/dirk_nowitzki1-scaled.jpg",
        },
        {
            name: "Kevin Garnett",
            position: forward._id,
            points: "26,071",
            rebounds: "14,662",
            assists: "5,445",
            championships: "1 time (2008)",
            HoFYear: "2020",
            bioHighlight: "A DRIVE SO STRONG IT INSPIRED OTHERS.",
            biography: "Kevin Garnett is one of three players in NBA history -- Kareem Abdul-Jabbar and Karl Malone are the others -- with at least 20,000 career points, 10,000 career rebounds and 5,000 career assists. He's also one of two players -- Hakeem Olajuwon is the other -- with at least 1,800 career steals and 1,800 career blocks.",
            image: "https://cdn.nba.com/manage/2021/10/kevin_garnett15-scaled.jpg",
        },
        {
            name: "Allen Iverson",
            position: guard._id,
            points: "24,368",
            rebounds: "3,394",
            assists: "5,624",
            championships: "None",
            HoFYear: "2016",
            bioHighlight: "IMPACTED CULTURE WITH STYLE AND SWAG.",
            biography: "Allen Iverson graced the NBA hardwood for 14 seasons as one of the most prolific scorers in the history of the game. He excelled at both the point guard and shooting guard position despite his small stature. At 6-feet tall and 165 pounds, Iverson shredded opposing defenses with his unique talent and captivated fans worldwide with his additional flair.",
            image: "https://cdn.nba.com/manage/2021/10/allen_iverson3-scaled.jpg",
        },
        {
            name: "Shaquille O'Neal",
            position: center._id,
            points: "28,596",
            rebounds: "13,099",
            assists: "3,026",
            championships: "4 times (2000, 2001, 2002, 2006)",
            HoFYear: "2016",
            bioHighlight: "THE ENTERTAINER WITH UNLIMITED TALENT.",
            biography: "Shaquille O’Neal is widely regarded as one of the most dominant players in NBA history. He amassed a number of accolades throughout 19 seasons in the league, including Rookie of the Year and MVP honors. O’Neal won four NBA titles and was named Finals MVP three times.",
            image: "https://cdn.nba.com/manage/2021/10/04ADB8ONealShaquille-scaled.jpg",
        },
        {
            name: "David Robinson",
            position: center._id,
            points: "20,790",
            rebounds: "10,497",
            assists: "2,441",
            championships: "2 times (1999, 2003)",
            HoFYear: "2009",
            bioHighlight: "THE PERSONIFICATION OF POWER AND GRACE.",
            biography: `Before there was Tim Duncan, there was David "The Admiral" Robinson. The legendary San Antonio Spurs center averaged 21.1 points and 10.6 rebounds over his 14-year career, laying the groundwork for the Spurs to become a dynasty. He won two NBA championships, an MVP award and was a 10-time All-NBA selection in his career.",
            image: "https://cdn.nba.com/manage/2021/10/david_robinson1-1-scaled.jpg`,
        },
        {
            name: "Hakeem Olajuwon",
            position: center._id,
            points: "26,946",
            rebounds: "13,748",
            assists: "3,058",
            championships: "2 times (1994, 1995)",
            HoFYear: "2008",
            bioHighlight: "AN ICON DOMINATING BOTH ENDS OF THE COURT.",
            biography: `Hakeem "The Dream" Olajuwon established himself as one of the most dominant and accomplished players of his era. His long list of accolades include an MVP award, two Finals MVP trophies and two Defensive Player of the Year honors.`,
            image: "https://cdn.nba.com/manage/2021/10/hakeem_olajuwon4-scaled.jpg",
        },
        {
            name: "Charles Barkley",
            position: forward._id,
            points: "23,757",
            rebounds: "12,546",
            assists: "4,215",
            championships: "None",
            HoFYear: "2006",
            bioHighlight: "BIG GAME AND EVEN BIGGER PERSONALITY.",
            biography: "Although he was initially thought to be undersized to some at 6-foot-6 to play his position, Charles Barkley became one of the NBA's best power forwards ever. Known for his tenacious rebounding and low-post scoring, Barkley was equally deft at running or finishing a fast break and was known for his solid court vision.",
            image: "https://cdn.nba.com/manage/2021/10/charles_barkley9-scaled.jpg",
        },

    ]


    await Player.insertMany(players)
    console.log('Players create')
}

const run = async () => {
    await main()
    db.close()
}

run()




// {
//     name: "",
//     position: "",
//     points: "",
//     rebounds: "",
//     assists: "",
//     championships: "",
//     HoFYear: "",
//     bioHighlight: "",
//     biography: "",
//     image: "",
//     video: "",
// },




//Postion description credit:
//https://jr.nba.com/basketball-positions/

//Players stats, bio highlights/biography:
//https://www.nba.com/75/team