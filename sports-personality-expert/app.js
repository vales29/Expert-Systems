
const SPORTS_DATABASE = [
    {
        name: "Soccer (Football)",
        category: "Team / Ball Sport",
        icon: "⚽",
        reason: "Excellent for team coordination, high-intensity running, and tactical positioning.",
        calories: "600 - 800 kcal/hr",
        gear: "Minimal (Cleats, Shin Guards)",
        vector: { teamwork: 9, adrenaline: 6, cardio: 8, strength: 5, technical: 6, cost: 2, outdoor: 8, contact: 6 }
    },
    {
        name: "Rock Climbing",
        category: "Adventure / Extreme",
        icon: "🧗",
        reason: "Perfect for testing raw upper body strength, calculated problem-solving, and adrenaline heights.",
        calories: "500 - 700 kcal/hr",
        gear: "Moderate (Harness, Shoes, Chalk)",
        vector: { teamwork: 2, adrenaline: 8, cardio: 5, strength: 8, technical: 7, cost: 5, outdoor: 9, contact: 3 }
    },
    {
        name: "Tennis",
        category: "Racket Sport",
        icon: "🎾",
        reason: "Matches your preference for 1v1 tactical duels, quick reflexes, and full-body sprint bursts.",
        calories: "500 - 650 kcal/hr",
        gear: "Moderate (Racket, Court Shoes)",
        vector: { teamwork: 3, adrenaline: 5, cardio: 7, strength: 5, technical: 8, cost: 4, outdoor: 6, contact: 2 }
    },
    {
        name: "Boxing",
        category: "Combat Sport / Martial Arts",
        icon: "🥊",
        reason: "Ideal for high-adrenaline combat focus, intense cardiovascular pacing, and physical contact.",
        calories: "700 - 900 kcal/hr",
        gear: "Moderate (Gloves, Wraps, Mouthguard)",
        vector: { teamwork: 1, adrenaline: 9, cardio: 9, strength: 7, technical: 8, cost: 3, outdoor: 1, contact: 10 }
    },
    {
        name: "Golf",
        category: "Precision Sport",
        icon: "⛳",
        reason: "Perfect if you seek low-impact, highly technical focus, quiet outdoor strolls, and peaceful concentration.",
        calories: "250 - 350 kcal/hr",
        gear: "Premium (Clubs, Bags, Ball Set)",
        vector: { teamwork: 2, adrenaline: 2, cardio: 4, strength: 3, technical: 10, cost: 9, outdoor: 8, contact: 1 }
    },
    {
        name: "Swimming",
        category: "Endurance / Aquatic",
        icon: "🏊",
        reason: "Provides complete zero-gravity full-body muscle conditioning, high endurance, and zero-impact safety.",
        calories: "500 - 700 kcal/hr",
        gear: "Minimal (Goggles, Swim Cap)",
        vector: { teamwork: 2, adrenaline: 3, cardio: 9, strength: 6, technical: 6, cost: 2, outdoor: 3, contact: 1 }
    },
    {
        name: "Surfing",
        category: "Adventure / Aquatic",
        icon: "🏄",
        reason: "Matches your affinity for ocean waves, natural wilderness, quick core balance, and adrenaline thrill.",
        calories: "400 - 550 kcal/hr",
        gear: "Premium (Surfboard, Wetsuit)",
        vector: { teamwork: 1, adrenaline: 9, cardio: 7, strength: 6, technical: 8, cost: 6, outdoor: 10, contact: 4 }
    },
    {
        name: "Yoga / Pilates",
        category: "Fitness & Mindset",
        icon: "🧘",
        reason: "Matches your desire for meditative focus, core flexibility, low-impact breathing, and absolute safety.",
        calories: "200 - 300 kcal/hr",
        gear: "Minimal (Mat)",
        vector: { teamwork: 1, adrenaline: 1, cardio: 3, strength: 5, technical: 6, cost: 2, outdoor: 3, contact: 1 }
    },
    {
        name: "Basketball",
        category: "Team / Ball Sport",
        icon: "🏀",
        reason: "Perfect for rapid-transition small group teamwork, high agility, ball handling, and court hops.",
        calories: "600 - 800 kcal/hr",
        gear: "Minimal (Sneakers)",
        vector: { teamwork: 8, adrenaline: 7, cardio: 8, strength: 5, technical: 7, cost: 2, outdoor: 4, contact: 5 }
    },
    {
        name: "Skiing / Snowboarding",
        category: "Adventure / Winter",
        icon: "🏂",
        reason: "Excellent if you crave alpine speeds, cold mountain elements, and technical slope carved lines.",
        calories: "500 - 650 kcal/hr",
        gear: "Premium (Skis/Board, Boots, Lift Pass)",
        vector: { teamwork: 2, adrenaline: 8, cardio: 6, strength: 7, technical: 8, cost: 8, outdoor: 10, contact: 4 }
    },
    {
        name: "CrossFit",
        category: "Fitness / Strength",
        icon: "🏋️",
        reason: "Combines high-exertion weightlifting, group push culture, power, and cardiovascular intervals.",
        calories: "650 - 850 kcal/hr",
        gear: "Moderate (Gym Membership, Shoes)",
        vector: { teamwork: 4, adrenaline: 6, cardio: 8, strength: 9, technical: 6, cost: 4, outdoor: 1, contact: 4 }
    },
    {
        name: "Badminton",
        category: "Racket Sport",
        icon: "🏸",
        reason: "A very accessible, lightning-fast court duel requiring low contact, high agility, and rapid wrist flicks.",
        calories: "400 - 500 kcal/hr",
        gear: "Minimal (Racket, Shuttles)",
        vector: { teamwork: 3, adrenaline: 4, cardio: 7, strength: 4, technical: 7, cost: 2, outdoor: 2, contact: 1 }
    },
    {
        name: "Fencing",
        category: "Combat / Precision",
        icon: "🤺",
        reason: "Matches a desire for deep historical discipline, rapid direct blade tactical dueling, and high focus.",
        calories: "450 - 600 kcal/hr",
        gear: "Premium (Blade, Protective Suit, Mask)",
        vector: { teamwork: 2, adrenaline: 7, cardio: 6, strength: 5, technical: 9, cost: 7, outdoor: 1, contact: 4 }
    },
    {
        name: "Rowing / Crew",
        category: "Endurance / Aquatic",
        icon: "🛶",
        reason: "Ultimate team synchrony, high physical output, and smooth gliding across flat outdoor waters.",
        calories: "650 - 800 kcal/hr",
        gear: "Premium (Club Boat, Oars)",
        vector: { teamwork: 7, adrenaline: 4, cardio: 10, strength: 8, technical: 6, cost: 6, outdoor: 8, contact: 2 }
    },
    {
        name: "Powerlifting / Weightlifting",
        category: "Strength Sport",
        icon: "💪",
        reason: "Perfect if you seek strict solo concentration, raw physical mass movements, and low impact.",
        calories: "300 - 450 kcal/hr",
        gear: "Moderate (Barbell, Plates, Belt)",
        vector: { teamwork: 1, adrenaline: 4, cardio: 2, strength: 10, technical: 5, cost: 3, outdoor: 1, contact: 2 }
    },
    {
        name: "Volleyball",
        category: "Team / Net Sport",
        icon: "🏐",
        reason: "Highly social team dynamics, specialized jumps, zero direct opponent contact, and great beach vibes.",
        calories: "400 - 600 kcal/hr",
        gear: "Minimal (Net, Ball)",
        vector: { teamwork: 8, adrenaline: 5, cardio: 6, strength: 4, technical: 6, cost: 2, outdoor: 6, contact: 2 }
    },
    {
        name: "Biking (Road/Mountain)",
        category: "Endurance / Adventure",
        icon: "🚲",
        reason: "Matches high cardio limits, scenic outdoor adventures, and custom technical mechanical gear.",
        calories: "500 - 800 kcal/hr",
        gear: "Premium (Bicycle, Helmet, Kit)",
        vector: { teamwork: 3, adrenaline: 7, cardio: 9, strength: 6, technical: 5, cost: 7, outdoor: 9, contact: 2 }
    },
    {
        name: "Triathlon",
        category: "Endurance / Extreme",
        icon: "🏃‍♂️",
        reason: "The ultimate solo physical test, combining swimming, cycling, and running on open roads.",
        calories: "750 - 1000 kcal/hr",
        gear: "Premium (Bike, Wetsuit, Running Gear)",
        vector: { teamwork: 1, adrenaline: 5, cardio: 10, strength: 6, technical: 5, cost: 8, outdoor: 9, contact: 2 }
    },
    {
        name: "Archery",
        category: "Precision Sport",
        icon: "🏹",
        reason: "Matches deep internal breathing, extreme mental composure, micro-precision calibration, and quiet outdoors.",
        calories: "200 - 300 kcal/hr",
        gear: "Moderate (Bow, Arrows, Target)",
        vector: { teamwork: 1, adrenaline: 2, cardio: 2, strength: 4, technical: 8, cost: 5, outdoor: 7, contact: 1 }
    },
    {
        name: "Skateboarding",
        category: "Adventure / Street",
        icon: "🛹",
        reason: "Expressive urban acrobatics, custom board style, balance, and quick adrenaline concrete spills.",
        calories: "400 - 550 kcal/hr",
        gear: "Moderate (Skateboard, Pads)",
        vector: { teamwork: 2, adrenaline: 8, cardio: 5, strength: 5, technical: 9, cost: 3, outdoor: 9, contact: 4 }
    },
    {
        name: "Kayaking / Rafting",
        category: "Adventure / Aquatic",
        icon: "🚣",
        reason: "Great for upper body work, navigating turbulent river rapids or peaceful nature shorelines.",
        calories: "400 - 600 kcal/hr",
        gear: "Premium (Kayak, Paddle, Life vest)",
        vector: { teamwork: 4, adrenaline: 7, cardio: 7, strength: 7, technical: 6, cost: 6, outdoor: 10, contact: 3 }
    },
    {
        name: "Rugby",
        category: "Team / Contact Sport",
        icon: "🏉",
        reason: "Requires intense collective teamwork, raw cardiovascular stamina, full-body tackles, and mental grit.",
        calories: "700 - 900 kcal/hr",
        gear: "Minimal (Boots, Mouthguard)",
        vector: { teamwork: 10, adrenaline: 8, cardio: 8, strength: 8, technical: 6, cost: 3, outdoor: 8, contact: 9 }
    },
    {
        name: "Table Tennis",
        category: "Precision / Court Sport",
        icon: "🏓",
        reason: "Lightning-fast reaction speeds, zero impact on joints, and rapid backspin duel placements.",
        calories: "300 - 450 kcal/hr",
        gear: "Minimal (Paddle, Balls)",
        vector: { teamwork: 3, adrenaline: 4, cardio: 5, strength: 3, technical: 8, cost: 2, outdoor: 1, contact: 1 }
    },
    {
        name: "Gymnastics",
        category: "Precision / Aesthetics",
        icon: "🤸",
        reason: "Ultimate artistic expression, absolute core strength, body flexibility, and gravity-defying tumbles.",
        calories: "400 - 600 kcal/hr",
        gear: "Moderate (Leotard, Chalk, Gym Fees)",
        vector: { teamwork: 2, adrenaline: 7, cardio: 6, strength: 8, technical: 9, cost: 4, outdoor: 1, contact: 3 }
    },
    {
        name: "Brazilian Jiu-Jitsu",
        category: "Combat Sport / Martial Arts",
        icon: "🥋",
        reason: "Highly tactical, physical ground grappling 'human chess' emphasizing leverage over raw strength.",
        calories: "600 - 800 kcal/hr",
        gear: "Moderate (Gi, Rashguard)",
        vector: { teamwork: 2, adrenaline: 8, cardio: 7, strength: 7, technical: 9, cost: 3, outdoor: 1, contact: 9 }
    }
];

// ==========================================
// 2. DATA CONFIGURATION: 20-QUESTION DATABASE
// ==========================================
const QUIZ_QUESTIONS = [
    {
        category: "Environment",
        text: "Where do you feel most energized and motivated to train?",
        options: [
            { icon: "🏢", title: "Indoor Courts / Gyms", desc: "Climate-controlled, clean, structured spaces.", effects: { outdoor: -3, cost: 1 } },
            { icon: "🌳", title: "Parks / Fields", desc: "Fresh air, green turf, local community fields.", effects: { outdoor: 2, cost: -1 } },
            { icon: "🏔️", title: "Deep Nature", desc: "Mountains, oceans, wild forests, and trails.", effects: { outdoor: 4, adrenaline: 1, cost: 1 } },
            { icon: "🏠", title: "Anywhere / Home", desc: "Streets, living room, maximum accessibility.", effects: { outdoor: 0, cost: -2 } }
        ]
    },
    {
        category: "Social Dynamic",
        text: "What is your ideal group size when engaging in activities?",
        options: [
            { icon: "👤", title: "Just Me (Pure Solo)", desc: "A personal battle against my own limits.", effects: { teamwork: -4 } },
            { icon: "👥", title: "One-on-One", desc: "Direct duels, partners, or small rivalries.", effects: { teamwork: -1, technical: 1 } },
            { icon: "🤝", title: "Small Group (3-5)", desc: "Close communication, tight-knit camaraderie.", effects: { teamwork: 2 } },
            { icon: "🛡️", title: "Large Squad (11+)", desc: "Complex plays, major team camaraderie.", effects: { teamwork: 4 } }
        ]
    },
    {
        category: "Pace & Rhythm",
        text: "How do you prefer the speed and rhythm of your training?",
        options: [
            { icon: "🧘", title: "Slow & Meditative", desc: "Deep focus, breathing, controlled postures.", effects: { adrenaline: -3, cardio: -2, technical: 1 } },
            { icon: "🏃", title: "Steady & Continuous", desc: "Pacing myself for long-term endurance.", effects: { cardio: 3, adrenaline: -1 } },
            { icon: "⚡", title: "Explosive Bursts", desc: "Sprints, leaps, high-power contractions.", effects: { strength: 2, adrenaline: 2 } },
            { icon: "🌀", title: "Chaotic & Reactive", desc: "Rapid-fire adaptations and quick reflexes.", effects: { adrenaline: 3, technical: 2 } }
        ]
    },
    {
        category: "Physical Focus",
        text: "Which physical attribute are you most interested in developing?",
        options: [
            { icon: "❤️", title: "Cardio Stamina", desc: "Endurance, breathing capacity, long runs.", effects: { cardio: 4, strength: -1 } },
            { icon: "🏋️", title: "Raw Power", desc: "Heavy lifting, muscle mass, explosion.", effects: { strength: 4, cardio: -2 } },
            { icon: "🤸", title: "Agility & Flexibility", desc: "Grace, balance, stretching, contortion.", effects: { technical: 3, strength: 1 } },
            { icon: "🎯", title: "Precision Control", desc: "Micro-movements, accuracy, coordination.", effects: { technical: 4, cardio: -1 } }
        ]
    },
    {
        category: "Contact level",
        text: "What is your comfort level with physical impact and collisions?",
        options: [
            { icon: "🚫", title: "Absolutely Zero Contact", desc: "I want my own separate lane or court.", effects: { contact: -4 } },
            { icon: "⚠️", title: "Light / Incidental Contact", desc: "Accidental brushes are fine, no tackles.", effects: { contact: 0 } },
            { icon: "💥", title: "High Body Collisions", desc: "Blocking, tackling, pushing boundaries.", effects: { contact: 3, strength: 1 } },
            { icon: "🥋", title: "Direct Combat Sparring", desc: "Martial arts, direct physical grapple/strike.", effects: { contact: 4, adrenaline: 2 } }
        ]
    },
    {
        category: "Equipment Focus",
        text: "What kind of sporting equipment do you prefer to handle?",
        options: [
            { icon: "🏃‍♀️", title: "Just My Own Body", desc: "No complex machinery, pure kinetic form.", effects: { cost: -2, technical: -1 } },
            { icon: "🏸", title: "Rackets / Sticks", desc: "An extension of my hand to hit targets.", effects: { technical: 2, cost: 1 } },
            { icon: "⚽", title: "Balls / Projectiles", desc: "Throwing, kicking, catching, dribbling.", effects: { teamwork: 1 } },
            { icon: "⚙️", title: "Complex Machinery", desc: "Bikes, boards, skis, highly technical gear.", effects: { cost: 3, technical: 3, adrenaline: 1 } }
        ]
    },
    {
        category: "Core Motivation",
        text: "What is your main psychological goal when training?",
        options: [
            { icon: "🧘‍♂️", title: "Zen & Stress Relief", desc: "Unplugging my mind and finding calm.", effects: { adrenaline: -3, teamwork: -1 } },
            { icon: "🏆", title: "Competition & Winning", desc: "Rankings, scores, defeating opponents.", effects: { teamwork: 1, adrenaline: 2 } },
            { icon: "🔥", title: "Adrenaline & Danger", desc: "Seeking thrills, height, speeds, and risk.", effects: { adrenaline: 4, outdoor: 1 } },
            { icon: "🥗", title: "Calorie Burn & Shred", desc: "Sweating heavily, shaping my physique.", effects: { cardio: 2, strength: 2 } }
        ]
    },
    {
        category: "Budget & Gear",
        text: "What is your financial budget for gear, fees, and clubs?",
        options: [
            { icon: "💸", title: "Micro Budget", desc: "Under $50. Just shoes or basic ball.", effects: { cost: -3 } },
            { icon: "💵", title: "Low-to-Moderate", desc: "Basic court fees, light gear, public parks.", effects: { cost: -1 } },
            { icon: "💳", title: "Moderate-to-High", desc: "Club dues, protective padding, gym pass.", effects: { cost: 2 } },
            { icon: "💎", title: "Premium / Luxury", desc: "Custom bikes, boards, travel, lift passes.", effects: { cost: 4, technical: 1 } }
        ]
    },
    {
        category: "Weather Resilience",
        text: "How does cold, rain, or harsh weather affect your motivation?",
        options: [
            { icon: "☀️", title: "Summer Vibes Only", desc: "I only train when it is warm and sunny.", effects: { outdoor: 2 } },
            { icon: "❄️", title: "I Love the Cold", desc: "Bring on the snow, ice, or crisp winter.", effects: { outdoor: 3, adrenaline: 1, cost: 2 } },
            { icon: "⛈️", title: "Embrace All Elements", desc: "Rain, mud, storm — it builds character.", effects: { outdoor: 4, contact: 1 } },
            { icon: "🏠", title: "Strictly Indoor", desc: "If it rains, I'm staying inside.", effects: { outdoor: -3 } }
        ]
    },
    {
        category: "Height & Gravity",
        text: "How do you feel about heights, climbing, or aerial maneuvers?",
        options: [
            { icon: "🛑", title: "Keep My Feet Grounded", desc: "I dislike heights and flipping over.", effects: { adrenaline: -2, technical: -1 } },
            { icon: "🤸‍♀️", title: "Jumps & Flips", desc: "Tumbling, diving, springboards appeal to me.", effects: { technical: 3, adrenaline: 2 } },
            { icon: "⛰️", title: "Vertical Ascent", desc: "Climbing cliffs, high walls, conquering peak.", effects: { outdoor: 2, adrenaline: 3, strength: 2 } },
            { icon: "🌊", title: "Riding Waves / Water Glide", desc: "Carving, floating, sliding on liquid levels.", effects: { outdoor: 2, adrenaline: 2 } }
        ]
    },
    {
        category: "Cognitive Load",
        text: "How do you like to use your brain during physical action?",
        options: [
            { icon: "⚡", title: "Pure Muscle Reflex", desc: "Shut off the brain, react instantly on instinct.", effects: { technical: -1, adrenaline: 2 } },
            { icon: "⚖️", title: "Balanced flow", desc: "Equal parts physical grit and basic rules.", effects: { technical: 0 } },
            { icon: "🧠", title: "Deep Strategy / Plays", desc: "Formations, court coverage, chess-like reads.", effects: { technical: 3, teamwork: 2 } },
            { icon: "🎯", title: "Extreme Concentration", desc: "Patience, micro-breathing calibration, focus.", effects: { technical: 4, adrenaline: -3 } }
        ]
    },
    {
        category: "Joint Impact",
        text: "What level of impact do you want your knees and joints to endure?",
        options: [
            { icon: "🌊", title: "Zero Gravity / Low Impact", desc: "Water buoyed or seated movements (swimming, rowing).", effects: { contact: -3 } },
            { icon: "🚶‍♂️", title: "Smooth Linear Impact", desc: "Paved cycling, brisk walks, light rolling.", effects: { contact: -1 } },
            { icon: "👟", title: "High-Impact Jumps", desc: "Hard court stomps, jumps, pounding pavements.", effects: { contact: 2 } },
            { icon: "💥", title: "Heavy Body Collisions", desc: "Tackles, mats, falls, high body friction.", effects: { contact: 4, strength: 1 } }
        ]
    },
    {
        category: "Appetite for Danger",
        text: "What is your appetite for physical danger and risk?",
        options: [
            { icon: "🛡️", title: "Safety First", desc: "Zero risk of major broken bones or wipes.", effects: { adrenaline: -4 } },
            { icon: "🩹", title: "Calculated Minor Scrapes", desc: "Occasional bruises, sore muscles are okay.", effects: { adrenaline: 0 } },
            { icon: "🏂", title: "Moderate Speed Risk", desc: "Wiping out at high speeds on wheels/snow.", effects: { adrenaline: 3, cost: 2 } },
            { icon: "🧗‍♂️", title: "Extreme Danger Element", desc: "Wild wilderness rapids or falling from heights.", effects: { adrenaline: 4, outdoor: 2 } }
        ]
    },
    {
        category: "Time Commitment",
        text: "What is your ideal session length for sports activities?",
        options: [
            { icon: "⏱️", title: "Quick & Intensive", desc: "30-45 minute blast anywhere.", effects: { cardio: 1, cost: -1 } },
            { icon: "🕒", title: "Solid Training Session", desc: "1 to 2 hours of thorough workout.", effects: { cardio: 2 } },
            { icon: "☀️", title: "Half-Day Outings", desc: "Hikes, cycles, or golf rounds (3-5 hours).", effects: { outdoor: 2, cost: 1 } },
            { icon: "🏕️", title: "Weekend Expeditions", desc: "Full-day wilderness treks or camping tours.", effects: { outdoor: 4, adrenaline: 1, cost: 2 } }
        ]
    },
    {
        category: "Acoustics & Ambient",
        text: "What kind of sounds and environment noise motivate you?",
        options: [
            { icon: "🎵", title: "Booming Beats / Crowds", desc: "Loud speaker music, cheering, echoing court squeaks.", effects: { teamwork: 2, outdoor: -2 } },
            { icon: "🍃", title: "Natural Whispers", desc: "Rustling leaves, chirping birds, crashing waves.", effects: { outdoor: 3, teamwork: -1 } },
            { icon: "🤫", title: "Deep Internal Silence", desc: "Just the sound of my breath and heartbeat.", effects: { teamwork: -3, adrenaline: -1 } },
            { icon: "🗣️", title: "Shouts & Tactical Calls", desc: "Constant whistles, coaching, peer directions.", effects: { teamwork: 4 } }
        ]
    },
    {
        category: "Learning Curve",
        text: "How do you feel about steep technical learning curves?",
        options: [
            { icon: "🟢", title: "Instant Play / Easy Fun", desc: "Pick up and play in 5 minutes with zero study.", effects: { technical: -3 } },
            { icon: "🟡", title: "Moderate Mechanics", desc: "Takes a few weeks to get decent, but manageable.", effects: { technical: 1 } },
            { icon: "🔴", title: "High Equipment Mastery", desc: "Requires detailed training of mechanics (strokes, sails).", effects: { technical: 3, cost: 1 } },
            { icon: "⚫", title: "Lifelong Discipline & Form", desc: "Years of form perfecting (gymnastics, martial arts).", effects: { technical: 4, strength: 1 } }
        ]
    },
    {
        category: "Body Balance Focus",
        text: "How do you prefer to load and exhaust your muscles?",
        options: [
            { icon: "💪", title: "Upper Body Dominant", desc: "Pulling, climbing, punching, paddle action.", effects: { strength: 2 } },
            { icon: "🏃‍♂️", title: "Lower Body Dominant", desc: "Running, cycling, heavy leg strides.", effects: { cardio: 2 } },
            { icon: "🔄", title: "Full Integrated Core", desc: "Complete head-to-toe balance, rolling, gymnastics.", effects: { technical: 2, strength: 1 } },
            { icon: "🫁", title: "Pure Cardio Circulation", desc: "Just get my lungs burning and sweat flowing.", effects: { cardio: 3 } }
        ]
    },
    {
        category: "Aesthetics vs. Power",
        text: "What matters more to you when performing a sport?",
        options: [
            { icon: "🩰", title: "Style & Grace", desc: "Artistic expression, perfect lines, smooth flows.", effects: { technical: 3 } },
            { icon: "⚡", title: "Raw Power & Speed", desc: "Moving heavy objects, breaking sprint records.", effects: { strength: 3 } },
            { icon: "♟️", title: "Tactical Positioning", desc: "Outsmarting opponent's physical geometry.", effects: { technical: 2, teamwork: 1 } },
            { icon: "🌲", title: "Survival & Line-Choice", desc: "Finding the best line down a mountain or wave.", effects: { outdoor: 2, adrenaline: 2 } }
        ]
    },
    {
        category: "Aquatics Affinity",
        text: "How do you feel about being in or on water?",
        options: [
            { icon: "🚫", title: "Strictly Dry Land", desc: "I hate getting wet or swimming.", effects: { outdoor: -1, cost: -1 } },
            { icon: "🏊", title: "Submerged Swimming", desc: "I love swimming, diving, and water resistance.", effects: { outdoor: 1, contact: -2 } },
            { icon: "⛵", title: "On-Water Glide", desc: "Boats, kayaks, surfboards, but keep me on top.", effects: { outdoor: 2, cost: 2 } },
            { icon: "🌊", title: "Neutral / Splash is OK", desc: "Water is fine, but not the primary focus.", effects: { outdoor: 1 } }
        ]
    },
    {
        category: "Sport Longevity",
        text: "What is your vision for how long you want to play this sport?",
        options: [
            { icon: "👴", title: "Play Till I am 80+", desc: "Gentle on joints, highly sustainable long-term.", effects: { contact: -4, strength: -1 } },
            { icon: "🔥", title: "Prime Years Intensity", desc: "High impact, elite fitness, recovery-heavy.", effects: { contact: 3, strength: 2, cardio: 1 } },
            { icon: "🚲", title: "Highly Adaptable Lifetime", desc: "Can dial down intensity (cycling, tennis).", effects: { technical: 1 } },
            { icon: "🛹", title: "Youth Peak Expression", desc: "High agility, concrete wipeout resilience.", effects: { adrenaline: 2, technical: 2 } }
        ]
    }
];

// ==========================================
// 3. APPLICATION STATE MANAGEMENT
// ==========================================
let state = {
    currentQuestionIndex: 0,
    userAnswers: [], // stores the selected option index for each question
    userVector: {
        teamwork: 5,
        adrenaline: 5,
        cardio: 5,
        strength: 5,
        technical: 5,
        cost: 5,
        outdoor: 5,
        contact: 5
    }
};

// ==========================================
// 4. MAIN ENGINE FUNCTIONS
// ==========================================

// Re-computes the user vector from scratch based on selected answers
function rebuildUserVector() {
    // Reset to base scores of 5
    state.userVector = {
        teamwork: 5,
        adrenaline: 5,
        cardio: 5,
        strength: 5,
        technical: 5,
        cost: 5,
        outdoor: 5,
        contact: 5
    };

    // Apply the modifiers from each selected answer
    state.userAnswers.forEach((ansIndex, qIndex) => {
        const option = QUIZ_QUESTIONS[qIndex].options[ansIndex];
        for (let dim in option.effects) {
            state.userVector[dim] += option.effects[dim];
        }
    });

    // Clamp values between 1 and 10
    for (let dim in state.userVector) {
        state.userVector[dim] = Math.max(1, Math.min(10, state.userVector[dim]));
    }
}

// Calculate Euclidean Distance and returns ranked list of sports
function matchSports() {
    rebuildUserVector();
    const u = state.userVector;

    let matchedList = SPORTS_DATABASE.map(sport => {
        const s = sport.vector;
        
        // Euclidean distance formula: sqrt( sum( (ui - si)^2 ) )
        let distSq = 
            Math.pow(u.teamwork - s.teamwork, 2) +
            Math.pow(u.adrenaline - s.adrenaline, 2) +
            Math.pow(u.cardio - s.cardio, 2) +
            Math.pow(u.strength - s.strength, 2) +
            Math.pow(u.technical - s.technical, 2) +
            Math.pow(u.cost - s.cost, 2) +
            Math.pow(u.outdoor - s.outdoor, 2) +
            Math.pow(u.contact - s.contact, 2);
        
        let distance = Math.sqrt(distSq);

        // Standardize compatibility scale.
        // Theoretical max distance is sqrt(8 * 9^2) = ~25.45.
        // Realistically, values are clamped. Let's make an intuitive percentage matching curve.
        let matchPct = Math.round(100 * (1 - (distance / 16.5)));
        matchPct = Math.max(15, Math.min(99, matchPct)); // Keep matching realistically between 15% and 99%

        return {
            ...sport,
            distance: distance,
            matchPercentage: matchPct
        };
    });

    // Sort by descending compatibility percentage
    matchedList.sort((a, b) => b.matchPercentage - a.matchPercentage);
    return matchedList;
}

// Determines the archetype persona based on vector profile
function getPersona(vector) {
    const v = vector;
    
    // Archetype matching based on dominant vector scores
    if (v.adrenaline >= 7.5 && v.contact >= 6.5) {
        return {
            title: "The High-Octane Gladiator",
            desc: "You crave physical grit, explosive contact, and heart-pumping challenge. You do not run from friction — you seek it out. Training for you is an arena of raw power, mental courage, and heavy impact.",
            traits: ["💥 Collision Resilient", "🔥 Adrenaline Driven", "💪 Power Focused"],
            theme: "var(--grad-primary)"
        };
    } else if (v.adrenaline >= 7.0 && v.outdoor >= 7.5) {
        return {
            title: "The Wild Thrillseeker",
            desc: "Nature is your playground, and gravity is your rival. You thrive in complex, unpredictable landscapes where high speed, climbing vertical lines, and environmental challenges keep your senses hyper-focused.",
            traits: ["🏔️ Alpine/Ocean Core", "⚡ Rapid Reaction", "🌲 Earth Connected"],
            theme: "var(--grad-success)"
        };
    } else if (v.outdoor >= 8.0 && v.teamwork <= 4.0) {
        return {
            title: "The Lone Explorer",
            desc: "You find deep clarity in continuous, long-distance stamina amidst raw natural landscapes. Solo outdoor sessions are your meditation, allowing you to master elements of terrain, water, or climbing in quiet focus.",
            traits: ["🫁 Endurance Master", "🌲 Nature Native", "👤 Self-Reliant"],
            theme: "var(--grad-secondary)"
        };
    } else if (v.teamwork >= 7.5 && v.cardio >= 6.5) {
        return {
            title: "The Team Champion",
            desc: "You thrive in high-communication environments, where collective sweat, strategic alignments, and shared locker rooms build deep community. You are motivated by winning together and pushing collective limits.",
            traits: ["🛡️ Collective Camradery", "📢 Vocal Communicator", "❤️ Heavy Cardio Pacing"],
            theme: "var(--grad-success)"
        };
    } else if (v.technical >= 7.5 && v.contact <= 3.5) {
        return {
            title: "The Zen Strategist",
            desc: "To you, sports is a physical chess game. You thrive on highly specialized technical movements, micro-breathing calibrations, and precision targets, preferring zero contact and structured rules.",
            traits: ["🧠 High Cognitive Focus", "🎯 Micro-Precision", "🛡️ Safe & Calculated"],
            theme: "var(--grad-accent)"
        };
    } else if (v.technical >= 7.5 && v.strength >= 6.5) {
        return {
            title: "The Kinetic Aesthetic",
            desc: "You see physical movement as a blend of raw muscle control, artistic flexibility, and absolute grace. Flips, holds, and extreme balance are your ultimate form of self-mastery.",
            traits: ["🤸 Ultra Flexible", "💪 Structural Strength", "🩰 Artistic Flow"],
            theme: "var(--grad-accent)"
        };
    } else {
        // Fallback robust archetype
        return {
            title: "The Versatile Athlete",
            desc: "You represent a perfectly balanced athletic profile. You adapt seamlessly to both group sports and solo workouts, seeking general physical well-being, moderate agility, and highly sustainable lifelong fitness.",
            traits: ["⚖️ Highly Balanced", "🔄 Multi-Adaptable", "👴 Lifelong Sustainable"],
            theme: "var(--grad-secondary)"
        };
    }
}

// ==========================================
// 5. INTERFACE RENDER FUNCTIONS
// ==========================================

// Switch between views with subtle animations
function switchView(targetViewId) {
    const panels = document.querySelectorAll('.view-panel');
    panels.forEach(panel => {
        panel.classList.remove('active');
    });

    const targetPanel = document.getElementById(targetViewId);
    if (targetPanel) {
        targetPanel.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// Load a question into the card
function renderQuestion() {
    const qIndex = state.currentQuestionIndex;
    const q = QUIZ_QUESTIONS[qIndex];

    // Update index texts & category
    document.getElementById('question-index').innerText = `${String(qIndex + 1).padStart(2, '0')} / 20`;
    document.getElementById('question-cat').innerText = q.category;
    document.getElementById('question-title').innerText = q.text;

    // Calculate progress fill percentage
    const progressFill = document.getElementById('progress-fill');
    const percent = Math.round(((qIndex + 1) / 20) * 100);
    progressFill.style.width = `${percent}%`;

    // Render back button visibility (hide if first question)
    const prevBtn = document.getElementById('prev-btn');
    if (qIndex === 0) {
        prevBtn.style.opacity = '0.3';
        prevBtn.style.pointerEvents = 'none';
    } else {
        prevBtn.style.opacity = '1';
        prevBtn.style.pointerEvents = 'auto';
    }

    // Render option buttons
    const container = document.getElementById('options-container');
    container.innerHTML = '';

    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.onclick = () => selectOption(idx);

        btn.innerHTML = `
            <div class="option-icon">${opt.icon}</div>
            <div class="option-details">
                <span class="option-title">${opt.title}</span>
                <span class="option-desc">${opt.desc}</span>
            </div>
        `;
        container.appendChild(btn);
    });
}

// Handle option click
function selectOption(optionIndex) {
    // Save selected answer index
    state.userAnswers[state.currentQuestionIndex] = optionIndex;

    // Advance to next question or show results
    if (state.currentQuestionIndex < 19) {
        state.currentQuestionIndex++;
        renderQuestion();
    } else {
        // Quiz finished! Show Results
        renderResults();
    }
}

// Go back one question
function goPrevious() {
    if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        renderQuestion();
    }
}

// ==========================================
// 6. SVG RADAR CHART DRAWING LOGIC
// ==========================================
function drawRadarChart(userVec, sportVec = null) {
    const container = document.getElementById('svg-chart-container');
    container.innerHTML = '';

    const width = 320;
    const height = 320;
    const cx = width / 2;
    const cy = height / 2;
    const maxVal = 10;
    const radius = 100; // max radius for score of 10

    const dims = [
        { key: "teamwork", label: "Teamwork" },
        { key: "adrenaline", label: "Adrenaline" },
        { key: "cardio", label: "Cardio" },
        { key: "strength", label: "Strength" },
        { key: "technical", label: "Technical" },
        { key: "cost", label: "Cost" },
        { key: "outdoor", label: "Outdoor" },
        { key: "contact", label: "Contact" }
    ];

    const numAxes = dims.length;

    // Helper: calculate angle for each index
    function getAngle(i) {
        // rotate by -90 degrees so the first axis points straight up
        return (i * (2 * Math.PI / numAxes)) - (Math.PI / 2);
    }

    // Start building the SVG string
    let svg = `<svg viewBox="0 0 ${width} ${height}" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">`;

    // 1. Draw Concentric Grid Octagons (values 2, 4, 6, 8, 10)
    for (let rVal = 2; rVal <= 10; rVal += 2) {
        let points = [];
        for (let i = 0; i < numAxes; i++) {
            const angle = getAngle(i);
            const r = (rVal / maxVal) * radius;
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            points.push(`${x},${y}`);
        }
        svg += `<polygon points="${points.join(' ')}" class="radar-grid-line" />`;
    }

    // 2. Draw Axis Spokes and Text Labels
    dims.forEach((dim, i) => {
        const angle = getAngle(i);
        // Spoke line
        const xSpoke = cx + radius * Math.cos(angle);
        const ySpoke = cy + radius * Math.sin(angle);
        svg += `<line x1="${cx}" y1="${cy}" x2="${xSpoke}" y2="${ySpoke}" class="radar-axis-line" />`;

        // Labels (position slightly outside max radius)
        const labelRadius = radius + 22;
        const xLabel = cx + labelRadius * Math.cos(angle);
        const yLabel = cy + labelRadius * Math.sin(angle);

        // Adjust text alignment anchor based on angle
        let textAnchor = "middle";
        if (Math.cos(angle) > 0.1) textAnchor = "start";
        if (Math.cos(angle) < -0.1) textAnchor = "end";

        // Vertical adjustment to keep it looking tidy
        let dy = "4";
        if (Math.sin(angle) < -0.8) dy = "-2";
        if (Math.sin(angle) > 0.8) dy = "10";

        svg += `<text x="${xLabel}" y="${yLabel}" text-anchor="${textAnchor}" dy="${dy}" class="chart-text">${dim.label}</text>`;
    });

    // 3. Draw Sport Polygon (dashed pink) if provided
    if (sportVec) {
        let sportPoints = [];
        dims.forEach((dim, i) => {
            const angle = getAngle(i);
            const score = sportVec[dim.key];
            const r = (score / maxVal) * radius;
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            sportPoints.push(`${x},${y}`);
        });
        svg += `<polygon points="${sportPoints.join(' ')}" class="sport-radar-poly" />`;

        // Dots on vertices
        dims.forEach((dim, i) => {
            const angle = getAngle(i);
            const score = sportVec[dim.key];
            const r = (score / maxVal) * radius;
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            svg += `<circle cx="${x}" cy="${y}" r="3.5" class="sport-radar-point" />`;
        });
    }

    // 4. Draw User Polygon (glowing solid cyan)
    let userPoints = [];
    dims.forEach((dim, i) => {
        const angle = getAngle(i);
        const score = userVec[dim.key];
        const r = (score / maxVal) * radius;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        userPoints.push(`${x},${y}`);
    });
    svg += `<polygon points="${userPoints.join(' ')}" class="user-radar-poly" />`;

    // Dots on vertices
    dims.forEach((dim, i) => {
        const angle = getAngle(i);
        const score = userVec[dim.key];
        const r = (score / maxVal) * radius;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        svg += `<circle cx="${x}" cy="${y}" r="4.5" class="user-radar-point" />`;
    });

    svg += `</svg>`;
    container.innerHTML = svg;
}

// ==========================================
// 7. DISPLAY RESULTS FUNCTION
// ==========================================
function renderResults() {
    const matches = matchSports();
    const userVec = state.userVector;

    // Get Persona
    const persona = getPersona(userVec);

    // Apply Persona details to Card
    document.getElementById('persona-title').innerText = persona.title;
    document.getElementById('persona-description').innerText = persona.desc;

    // Apply Traits
    const traitsContainer = document.getElementById('persona-traits');
    traitsContainer.innerHTML = '';
    persona.traits.forEach(trait => {
        const span = document.createElement('span');
        span.className = 'trait-tag';
        span.innerText = trait;
        traitsContainer.appendChild(span);
    });

    // Color code Left Persona Border
    const personaCard = document.querySelector('.persona-card');
    personaCard.style.setProperty('--grad-accent', persona.theme);

    // Render Top 3 Matches
    const topMatchesContainer = document.getElementById('top-matches-container');
    topMatchesContainer.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        const sport = matches[i];
        const card = document.createElement('div');
        card.className = 'sport-match-card glass-card';
        card.innerHTML = `
            <div class="match-score-badge">${sport.matchPercentage}% MATCH</div>
            <div class="match-card-icon">${sport.icon}</div>
            <div class="match-card-info">
                <div class="match-card-rank">RECOMMENDATION #${i + 1}</div>
                <h3 class="match-card-name">${sport.name}</h3>
                <p class="match-card-reason">${sport.reason}</p>
                
                <div class="match-card-metrics">
                    <div class="metric-item">
                        <span class="metric-label">CALORIE BURN</span>
                        <span class="metric-value">${sport.calories}</span>
                    </div>
                    <div class="metric-item">
                        <span class="metric-label">EQUIPMENT LEVEL</span>
                        <span class="metric-value">${sport.gear}</span>
                    </div>
                    <div class="metric-item">
                        <span class="metric-label">CATEGORY</span>
                        <span class="metric-value">${sport.category}</span>
                    </div>
                </div>
            </div>
        `;
        topMatchesContainer.appendChild(card);
    }

    // Draw the custom Radar Chart comparison (User vs. #1 recommended sport)
    drawRadarChart(userVec, matches[0].vector);

    // Render Scoreboard Table Rows
    const tbody = document.getElementById('scoreboard-rows');
    tbody.innerHTML = '';

    matches.forEach((sport, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="score-rank">#${idx + 1}</td>
            <td class="score-name">${sport.icon} ${sport.name}</td>
            <td>${sport.category}</td>
            <td class="score-pct">${sport.matchPercentage}%</td>
        `;
        // Make rows clickable to load that sport on the radar comparison graph!
        tr.style.cursor = 'pointer';
        tr.onclick = () => {
            // Re-render chart with selected sport comparison
            drawRadarChart(userVec, sport.vector);
            // Highlight row visually
            document.querySelectorAll('#scoreboard-rows tr').forEach(row => row.style.background = 'none');
            tr.style.background = 'rgba(0, 242, 254, 0.05)';
        };
        tbody.appendChild(tr);
    });

    // Switch View Panel
    switchView('results-view');
}

// ==========================================
// 8. INTERACTIVE INITIALIZATION & LISTENERS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    
    // Start Quiz Button
    const startBtn = document.getElementById('start-btn');
    startBtn.onclick = () => {
        state.currentQuestionIndex = 0;
        state.userAnswers = [];
        renderQuestion();
        switchView('quiz-view');
    };

    // Go Back button in Quiz Header
    const prevBtn = document.getElementById('prev-btn');
    prevBtn.onclick = goPrevious;

    // Scoreboard Toggle Button
    const toggleScoreboardBtn = document.getElementById('toggle-scoreboard-btn');
    const scoreboardContainer = document.getElementById('scoreboard-table-container');
    
    toggleScoreboardBtn.onclick = () => {
        if (scoreboardContainer.classList.contains('collapsed')) {
            scoreboardContainer.classList.remove('collapsed');
            toggleScoreboardBtn.innerText = "Hide Full List";
        } else {
            scoreboardContainer.classList.add('collapsed');
            toggleScoreboardBtn.innerText = "Show Full List";
        }
    };

    // Restart Assessment Button
    const restartBtn = document.getElementById('restart-btn');
    restartBtn.onclick = () => {
        state.currentQuestionIndex = 0;
        state.userAnswers = [];
        renderQuestion();
        switchView('quiz-view');
    };
});
