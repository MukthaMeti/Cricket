

import React from 'react';
import './Dashboard.css';

function Dashboard() {
    const headings = [
        "Emerging Nations in World Cricket: A New Dawn",
        "The Growth of Women's Cricket Across the Globe",
        "T20 Leagues Revolutionizing Cricket: From IPL to The Hundred",
        "Technological Innovations in Cricket: The Impact of Data Analytics and More"
    ];

    const paragraphs = [
        "Cricket is no longer dominated solely by traditional powerhouses like Australia, England, or India. Emerging nations like Afghanistan, Ireland, and Namibia are making their mark on the international stage. With significant investments in grassroots programs and infrastructure, these teams are now competing in major global tournaments. Afghanistan’s rise, in particular, has been spectacular, producing world-class talents like Rashid Khan. The expansion of cricket to new regions continues to diversify the sport, bringing a fresh wave of excitement to the global cricketing landscape.",
        
        "Women's cricket is witnessing exponential growth worldwide. With the success of events like the Women's T20 World Cup and the launch of domestic leagues such as the Women's Big Bash League (WBBL) and The Hundred, the sport is reaching new heights. Players like Australia's Ellyse Perry, India's Harmanpreet Kaur, and South Africa’s Dane van Niekerk have become global icons. Sponsorships and viewership for women's cricket have also surged, ensuring that women’s cricket is not just an afterthought but a primary attraction on the global stage.",
        
        "T20 leagues have revolutionized the sport of cricket, turning it into a high-octane entertainment spectacle. The Indian Premier League (IPL) paved the way for this format, drawing huge crowds and major investments. Leagues like The Hundred (England), Big Bash League (Australia), and the Caribbean Premier League (CPL) have followed suit, showcasing cricketing talents across the world. These tournaments are not only commercially successful but are also incubators for young players, giving them a platform to showcase their skills alongside international superstars.",
        
        "Technology in cricket is transforming how the game is played, analyzed, and consumed. Hawk-Eye technology for tracking ball trajectories, the Decision Review System (DRS) for reviewing umpiring decisions, and the use of data analytics in performance optimization have revolutionized cricket. Teams now use data to scout opponents, strategize, and enhance player performance, while fans enjoy detailed real-time stats during live matches. Wearable technology to monitor fitness, the rise of smart bats with sensors, and AI-powered analytics are taking cricket into an era of unprecedented precision and innovation."
    ];

    const images = [
        'https://tse3.mm.bing.net/th?id=OIP.tY3NDP_j5mPEt15uh_oJhgHaDq&pid=Api&P=0&h=180',
        'https://tse2.mm.bing.net/th?id=OIP.5hXUxp9oOvHFEdTkA96ujwAAAA&pid=Api&P=0&h=180',
        'https://tse2.mm.bing.net/th?id=OIP.QQn18TQIGCH4Csmg9xNEhwHaFv&pid=Api&P=0&h=180',
        'https://tse2.mm.bing.net/th?id=OIP.rGHO_EKHMUPtyL3X4MSVkwHaEV&pid=Api&P=0&h=180',
        'https://tse2.mm.bing.net/th?id=OIP.tFyyo2EXyWgrnCXzbPpmHgHaHT&pid=Api&P=0&h=180',
        'https://tse2.mm.bing.net/th?id=OIP.f3GJkZSG7MjCujz-u7gIawHaGG&pid=Api&P=0&h=180',
        'https://tse3.mm.bing.net/th?id=OIP.grmeRTtX70nNKdkdmz3hXQHaE7&pid=Api&P=0&h=180',
    ];

    const wikipediaLink = "https://en.wikipedia.org/wiki/2011_Cricket_World_Cup";

    return (
        <div className="dashboard">
            <div className="headings">
                <div>
                    <h2>{headings[0]}</h2>
                    <p>{paragraphs[0]}</p>
                    <div className="image-container">
                        <img src={images[0]}  />
                        <img src={images[1]} />
                    </div>
                </div>
                <div>
                    <h2>{headings[1]}</h2>
                    <p>{paragraphs[1]}</p>
                    <div className="image-container">
                        <img src={images[2]}/>
                        <img src={images[3]}/>
                    </div>
                </div>
                <div>
                    <h2>{headings[2]}</h2>
                    <p>{paragraphs[2]}</p>
                    <div className="image-container">
                        <img src={images[4]}/>
                        <img src={images[5]}/>
                        <img src={images[6]}/>
                    </div>
                </div>
                <div>
                    <h2>{headings[3]}</h2>
                    <p>
                        <a href={wikipediaLink} target="_blank" rel="noopener noreferrer">
                            Click here to explore more about cricket on Wikipedia!
                        </a>
                    </p>
                </div>
            </div>

            <div className="logos-container">
                <a href="https://www.google.com" target="_blank" rel="noreferrer">
                    <img
                        src="https://tse4.mm.bing.net/th?id=OIP.M45DMMHUpEwPeAsh9isdyAHaHa&pid=Api&P=0&h=180"
                        alt="Google Logo"
                    />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <img
                        src="https://tse1.mm.bing.net/th?id=OIP.-ZirgQE5pr8e7htQWowJIgHaHa&pid=Api&P=0&h=180"
                        alt="Instagram Logo"
                    />
                </a>
            </div>
        </div>
    );
}

export default Dashboard;
