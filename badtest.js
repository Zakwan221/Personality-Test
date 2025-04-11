// Bad Personality Test JavaScript

// Sample bad personality types
const badPersonalityTypes = [
    {
        id: 'paranoid',
        name: 'Paranoid',
        color: 'e74c3c',
        description: 'Excessive self-love and obsession with self-image'
    },
    {
        id: 'toxic',
        name: 'Toxic',
        color: '8e44ad',
        description: 'Tendency to control and exploit others'
    },
    {
        id: 'aggressive',
        name: 'Aggressive',
        color: 'f39c12',
        description: 'Indirectly expressing negative feelings'
    },
    {
        id: 'narcissistic',
        name: 'Narcissistic',
        color: '3498db',
        description: 'Setting unrealistically high standards'
    },
    {
        id: 'antisocial',
        name: 'Antisocial',
        color: '1abc9c',
        description: 'Excessive reliance on others for emotional needs'
    },
    {
        id: 'avoidant',
        name: 'Avoidant',
        color: '7f8c8d',
        description: 'Avoiding social situations due to fear of rejection'
    },
    {
        id: 'dramatic',
        name: 'Dramatic',
        color: '2c3e50',
        description: 'Excessive distrust and suspicion of others'
    },
    {
        id: 'impulsive',
        name: 'Impulsive',
        color: 'd35400',
        description: 'Acting without thinking of consequences'
    },
    {
        id: 'lazy',
        name: 'Lazy',
        color: 'c0392b',
        description: 'Excessive emotionality and attention-seeking'
    }
];

// All 45 bad personality test questions (5 questions per personality type)
const questions = [
    // 1. Paranoid (5 questions)
    {
        question: "Do you frequently suspect that others are trying to harm or deceive you without clear evidence?",
        personalityType: "paranoid"
    },
    {
        question: "Do you often doubt the loyalty or trustworthiness of friends or associates?",
        personalityType: "paranoid"
    },
    {
        question: "Are you reluctant to confide in others because you fear the information will be used against you?",
        personalityType: "paranoid"
    },
    {
        question: "Do you often interpret innocent remarks or events as having hidden threatening meanings?",
        personalityType: "paranoid"
    },
    {
        question: "Do you hold grudges or have difficulty forgiving others for perceived insults or slights?",
        personalityType: "paranoid"
    },
    
    // 2. Toxic (5 questions)
    {
        question: "Do you enjoy spreading gossip or rumors about other people?",
        personalityType: "toxic"
    },
    {
        question: "Do you act differently when someone is present versus when they're not around?",
        personalityType: "toxic"
    },
    {
        question: "Do you frequently criticize or judge others for their choices, appearance, or behavior?",
        personalityType: "toxic"
    },
    {
        question: "Do you feel resentful when others succeed or receive recognition?",
        personalityType: "toxic"
    },
    {
        question: "Do you use guilt, manipulation, or twisting facts to get what you want from others?",
        personalityType: "toxic"
    },
    
    // 3. Aggressive (5 questions)
    {
        question: "Do you experience intense mood swings that significantly affect your relationships?",
        personalityType: "aggressive"
    },
    {
        question: "Do you have a pattern of unstable and intense personal relationships?",
        personalityType: "aggressive"
    },
    {
        question: "Do you frequently engage in impulsive behaviors that could be self-damaging?",
        personalityType: "aggressive"
    },
    {
        question: "Are you often described as rude or disrespectful by others?",
        personalityType: "aggressive"
    },
    {
        question: "Do you have difficulty controlling your anger or aggressive impulses?",
        personalityType: "aggressive"
    },
    
    // 4. Narcissistic (5 questions)
    {
        question: "Do you have an exaggerated sense of self-importance or accomplishments?",
        personalityType: "narcissistic"
    },
    {
        question: "Do you often fantasize about unlimited success, power, brilliance, or beauty?",
        personalityType: "narcissistic"
    },
    {
        question: "Do you believe that you are special and should only associate with other high-status people?",
        personalityType: "narcissistic"
    },
    {
        question: "Do you require excessive admiration from others?",
        personalityType: "narcissistic"
    },
    {
        question: "Do you have difficulty recognizing or identifying with the feelings and needs of others?",
        personalityType: "narcissistic"
    },
    
    // 5. Antisocial (5 questions)
    {
        question: "Do you frequently struggle to express yourself clearly in social situations?",
        personalityType: "antisocial"
    },
    {
        question: "Do you have persistent low self-confidence in social settings?",
        personalityType: "antisocial"
    },
    {
        question: "Do you find it difficult to form and maintain friendships?",
        personalityType: "antisocial"
    },
    {
        question: "Do you experience intense fear of criticism or rejection from others?",
        personalityType: "antisocial"
    },
    {
        question: "Do you actively avoid social gatherings or situations where you might be the center of attention?",
        personalityType: "antisocial"
    },
    
    // 6. Dramatic (5 questions)
    {
        question: "Do you often feel uncomfortable when you're not the center of attention?",
        personalityType: "dramatic"
    },
    {
        question: "Do you use your physical appearance to draw attention to yourself?",
        personalityType: "dramatic"
    },
    {
        question: "Are your emotions rapidly shifting and shallow in expression?",
        personalityType: "dramatic"
    },
    {
        question: "Are you easily influenced by others or circumstances?",
        personalityType: "dramatic"
    },
    {
        question: "Do you tend to exaggerate the significance of minor problems or events?",
        personalityType: "dramatic"
    },
    
    // 7. Lazy & Unreliable (5 questions)
    {
        question: "Do you regularly postpone important tasks until the last minute or past their deadlines?",
        personalityType: "lazy"
    },
    {
        question: "Do you often expect others to handle your responsibilities for you?",
        personalityType: "lazy"
    },
    {
        question: "Do you frequently make promises you don't keep?",
        personalityType: "lazy"
    },
    {
        question: "When something goes wrong, do you usually blame external factors rather than taking responsibility?",
        personalityType: "lazy"
    },
    {
        question: "Do you find it difficult to maintain focus and effort on tasks that don't provide immediate gratification?",
        personalityType: "lazy"
    },
    
    // 8. Impulsive (5 questions)
    {
        question: "Do you have difficulty making everyday decisions without excessive advice from others?",
        personalityType: "impulsive"
    },
    {
        question: "Do you need others to assume responsibility for most major areas of your life?",
        personalityType: "impulsive"
    },
    {
        question: "Do you find it difficult to express disagreement with others because of fear of rejection?",
        personalityType: "impulsive"
    },
    {
        question: "Do you feel helpless when alone or when relationships end?",
        personalityType: "impulsive"
    },
    {
        question: "Are you preoccupied with fears of being left to take care of yourself?",
        personalityType: "impulsive"
    },
    
    // 9. Avoidant (5 questions)
    {
        question: "Are you preoccupied with details, rules, lists, order, or schedules to the point where the main objective of the activity is lost?",
        personalityType: "avoidant"
    },
    {
        question: "Do you have such high standards that they interfere with task completion?",
        personalityType: "avoidant"
    },
    {
        question: "Are you so devoted to work that you exclude leisure activities and friendships?",
        personalityType: "avoidant"
    },
    {
        question: "Are you overly rigid and inflexible about matters of morality, ethics, or values?",
        personalityType: "avoidant"
    },
    {
        question: "Do you need to be the best at everything you do, unable to accept being second place?",
        personalityType: "avoidant"
    }
];

// Initialize variables
let currentQuestion = 0;
let userScores = {
    paranoid: 0,
    toxic: 0,
    aggressive: 0,
    narcissistic: 0,
    antisocial: 0,
    dramatic: 0,
    lazy: 0,
    impulsive: 0,
    avoidant: 0
};

// Track user's answers to allow changing previous answers
let userAnswers = [];

// Create a global variable for question counts by personality type
let questionCountByType = {};

// Personality descriptions
const personalityDescriptions = {
    paranoid: {
        name: "Paranoid",
        icon: "fas fa-user-secret",
        description: "People with paranoid personality traits have a persistent distrust of others and are suspicious of people's intentions. They may interpret innocent remarks as personal attacks.",
        traits: [
            "Distrusts others, always suspicious",
            "Believes people are trying to harm or deceive them",
            "Finds it hard to form close relationships",
            "Suspicious of others, often thinking people have bad intentions",
            "Holds grudges and has difficulty forgiving perceived slights"
        ]
    },
    toxic: {
        name: "Toxic",
        icon: "fas fa-skull-crossbones",
        description: "People with toxic personality traits tend to drain others through manipulative, judgmental, or two-faced behavior. They often create drama and negative environments.",
        traits: [
            "Gossiper – Spreads rumors and enjoys talking about others behind their backs",
            "Passive-Aggressive and two-faced – Acts nice but subtly insults or sabotages others",
            "Judgmental and chronic complainer – Criticizes others constantly",
            "Jealous/Insecure – Always comparing themselves to others, resentful of others' success",
            "Manipulates, guilt-trips, or gaslights"
        ]
    },
    aggressive: {
        name: "Aggressive",
        icon: "fas fa-bolt",
        description: "People with aggressive personality traits have difficulty controlling their emotions and impulses. They can be volatile in relationships and may lash out at others.",
        traits: [
            "Intense mood swings and unstable relationships",
            "Fear of abandonment, impulsive behavior",
            "Rude & Disrespectful",
            "Has angry outbursts and difficulty controlling temper",
            "May engage in self-destructive behavior"
        ]
    },
    narcissistic: {
        name: "Narcissistic",
        icon: "fas fa-crown",
        description: "People with narcissistic personality traits have an inflated sense of their own importance and a deep need for excessive attention and admiration. They often lack empathy for others.",
        traits: [
            "Inflated sense of self-importance",
            "Seeks admiration, lacks empathy",
            "Easily offended, believes they are superior",
            "Selfish and self-centered",
            "Takes advantage of others to achieve their own goals"
        ]
    },
    antisocial: {
        name: "Antisocial",
        icon: "fas fa-user-slash",
        description: "People with antisocial personality traits struggle with social interactions and may avoid social situations due to anxiety or low confidence. They may have difficulty building relationships.",
        traits: [
            "Poor Communication Skills",
            "Low Confidence",
            "Difficulty Building Relationships",
            "Extreme fear of rejection and criticism",
            "Avoids social situations"
        ]
    },
    dramatic: {
        name: "Dramatic",
        icon: "fas fa-theater-masks",
        description: "People with dramatic personality traits constantly seek attention and validation from others. They tend to be emotionally expressive and may exaggerate situations.",
        traits: [
            "Constantly seeks attention, overly dramatic",
            "Emotionally reactive, exaggerated expressions",
            "Easily influenced by others",
            "Overreacts to small problems",
            "Feels uncomfortable when not the center of attention"
        ]
    },
    lazy: {
        name: "Lazy & Unreliable",
        icon: "fas fa-couch",
        description: "People with lazy and unreliable personality traits consistently avoid responsibilities and putting in effort. They may depend on others to take care of things for them.",
        traits: [
            "Procrastinator – Constantly delays important tasks, unreliable",
            "Freeloader – Always expects others to do things for them but never returns favors",
            "Excuse Maker – Never takes responsibility, always has an excuse for failure",
            "Lacks initiative and avoids challenging tasks",
            "Consistently fails to follow through on commitments"
        ]
    },
    impulsive: {
        name: "Impulsive",
        icon: "fas fa-hands-helping",
        description: "People with impulsive personality traits have difficulty controlling their impulses and tend to act without thinking. They often make decisions based on immediate feelings rather than long-term consequences.",
        traits: [
            "Acts without thinking about consequences",
            "Difficulty planning ahead or considering the future",
            "Often interrupts others or speaks out of turn",
            "Makes hasty decisions that they later regret",
            "Struggles with patience and delayed gratification"
        ]
    },
    avoidant: {
        name: "Avoidant",
        icon: "fas fa-tasks",
        description: "People with avoidant personality traits are preoccupied with rejection and disapproval. They tend to avoid social situations and may be extremely sensitive to criticism.",
        traits: [
            "Avoids activities involving significant interpersonal contact",
            "Unwilling to get involved with people unless certain of being liked",
            "Restraint in intimate relationships due to fear of shame or ridicule",
            "Preoccupation with being criticized or rejected in social situations",
            "Views self as socially inept, personally unappealing, or inferior to others"
        ]
    }
};

// Initialize the test
function initTest() {
    // Hide results container if visible
    document.getElementById('results-container').style.display = 'none';
    
    // Show question container
    document.getElementById('question-container').style.display = 'block';
    
    // Reset variables
    currentQuestion = 0;
    userScores = {
        paranoid: 0,
        toxic: 0,
        aggressive: 0,
        narcissistic: 0,
        antisocial: 0,
        dramatic: 0,
        lazy: 0,
        impulsive: 0,
        avoidant: 0
    };
    userAnswers = [];
    
    // Calculate question counts by personality type
    questionCountByType = {};
    questions.forEach(q => {
        if (!questionCountByType[q.personalityType]) {
            questionCountByType[q.personalityType] = 0;
        }
        questionCountByType[q.personalityType]++;
    });
    
    // Display first question
    displayQuestion();
}

// Display current question
function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const prevButton = document.getElementById('prev-button');
    const submitButton = document.getElementById('submit-button');
    
    // Update progress bar
    updateProgressBar();
    
    // Set question text
    questionText.textContent = questions[currentQuestion].question;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Create options (only Yes and No)
    const options = ['Yes', 'No'];
    options.forEach((option, index) => {
        const optionButton = document.createElement('div');
        optionButton.className = 'option';
        
        // Check if this option was previously selected
        if (userAnswers[currentQuestion] !== undefined && userAnswers[currentQuestion].answer === index) {
            optionButton.classList.add('selected');
        }
        
        optionButton.textContent = option;
        optionButton.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionButton);
    });
    
    // Toggle previous button visibility
    prevButton.style.display = currentQuestion > 0 ? 'block' : 'none';
    
    // Toggle submit button visibility
    submitButton.style.display = currentQuestion === questions.length - 1 ? 'block' : 'none';
    submitButton.disabled = userAnswers.length < questions.length;
}

// Handle option selection
function selectOption(optionIndex) {
    // Clear previous selection
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    
    // Highlight selected option
    options[optionIndex].classList.add('selected');
    
    // Record answer (binary scoring: Yes=1, No=0)
    const personalityType = questions[currentQuestion].personalityType;
    const score = optionIndex === 0 ? 1 : 0; // Yes=1, No=0
    
    // Store answer
    userAnswers[currentQuestion] = {
        personalityType: personalityType,
        answer: optionIndex,
        score: score
    };
    
    // Enable submit button if on last question
    if (currentQuestion === questions.length - 1) {
        document.getElementById('submit-button').disabled = false;
    }
    
    // Wait a moment before moving to next question
    setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            displayQuestion();
        }
    }, 500);
}

// Handle previous button click
function goToPreviousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

// Update progress bar
function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${Math.round(progress)}% Complete - Question ${currentQuestion + 1} of ${questions.length}`;
}

// Calculate final scores
function calculateScores() {
    // Reset scores
    Object.keys(userScores).forEach(type => {
        userScores[type] = 0;
    });
    
    // Calculate scores for each personality type
    for (let i = 0; i < questions.length; i++) {
        const answer = userAnswers[i];
        if (answer && answer.personalityType) {
            userScores[answer.personalityType] += answer.score;
        }
    }
    
    // Debug information
    console.log("Raw scores:", {...userScores});
    console.log("Total answers recorded:", userAnswers.length);
    console.log("Question count by type:", {...questionCountByType});
}

// Display test results
function showResults() {
    // Make sure all answers are properly counted - ensure last answer is included 
    // (in case user clicks submit right after answering last question)
    if (currentQuestion === questions.length - 1) {
        // If we're on the last question, make sure it's counted
        // This code ensures the last answer is included in the calculation
        const lastOption = document.querySelector('.option.selected');
        if (lastOption) {
            const optionIndex = Array.from(document.querySelectorAll('.option')).indexOf(lastOption);
            const personalityType = questions[currentQuestion].personalityType;
            const score = optionIndex === 0 ? 1 : 0; // Yes=1, No=0
            
            userAnswers[currentQuestion] = {
                personalityType: personalityType,
                answer: optionIndex,
                score: score
            };
        }
    }
    
    // Calculate final scores
    calculateScores();
    
    // Hide question container
    document.getElementById('question-container').style.display = 'none';
    
    // Show results container
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = '';
    
    // Create summary section
    const summaryCard = document.createElement('div');
    summaryCard.className = 'summary-card fade-in';
    
    // Add summary title
    const summaryTitle = document.createElement('h2');
    summaryTitle.textContent = 'Your Personality Evaluation';
    summaryCard.appendChild(summaryTitle);
    
    // Create summary description
    const summaryDesc = document.createElement('p');
    summaryDesc.textContent = 'Below are your scores for each potentially problematic personality trait. Only traits with scores of 3/5 or higher are shown.';
    summaryCard.appendChild(summaryDesc);
    
    // Create personality summary
    const personalitySummary = document.createElement('div');
    personalitySummary.className = 'personality-summary';
    
    // Check if any personality type has a score of 3 or higher
    const hasHighScores = Object.keys(userScores).some(type => {
        const maxScore = questionCountByType[type] || 5;
        return userScores[type] >= 3;
    });
    
    if (!hasHighScores) {
        // Create congratulatory message if no high scores
        const congratsMessage = document.createElement('div');
        congratsMessage.className = 'congrats-message';
        congratsMessage.innerHTML = '<h3>Congratulations!</h3><p>Based on your responses, you don\'t show significant tendencies toward any negative personality traits. This suggests you have a well-balanced personality with healthy interpersonal patterns.</p>';
        summaryCard.appendChild(congratsMessage);
    } else {
        // Sort personality types by score (descending)
        const sortedTypes = Object.keys(userScores)
            .filter(type => {
                const maxScore = questionCountByType[type] || 5;
                return userScores[type] >= 3; // Only include scores of 3 or higher
            })
            .sort((a, b) => userScores[b] - userScores[a]);
        
        // Add summary items - only display personality types with scores of 3 or higher
        sortedTypes.forEach(type => {
            const summaryItem = document.createElement('div');
            summaryItem.className = 'summary-item';
            
            const summaryName = document.createElement('div');
            summaryName.className = 'summary-name';
            summaryName.textContent = personalityDescriptions[type].name;
            
            const summaryScore = document.createElement('div');
            summaryScore.className = 'summary-score';
            const maxScore = questionCountByType[type] || 5;
            summaryScore.textContent = `${userScores[type]}/${maxScore}`;
            
            summaryItem.appendChild(summaryName);
            summaryItem.appendChild(summaryScore);
            personalitySummary.appendChild(summaryItem);
        });
        
        summaryCard.appendChild(personalitySummary);
    }
    
    // Add warning message
    const warningMessage = document.createElement('div');
    warningMessage.className = 'warning-message';
    warningMessage.innerHTML = '<p><strong>Disclaimer:</strong> This is not a diagnostic tool. It is for entertainment and self-reflection purposes only. If you have concerns about your mental health, please consult a qualified mental health professional.</p>';
    summaryCard.appendChild(warningMessage);
    
    resultsContainer.appendChild(summaryCard);
    
    // Create detailed results section
    const resultDetails = document.createElement('div');
    resultDetails.className = 'result-details';
    
    if (!hasHighScores) {
        // If no high scores, add a positive reinforcement message
        const positiveMessage = document.createElement('div');
        positiveMessage.className = 'personality-card positive-card fade-in';
        positiveMessage.innerHTML = `
            <h3><i class="fas fa-medal personality-icon"></i> Healthy Personality Traits</h3>
            <p>Your responses indicate that you tend to:</p>
            <ul class="trait-list">
                <li>Trust others appropriately and maintain healthy relationships</li>
                <li>Communicate your needs and feelings directly</li>
                <li>Consider others' feelings and maintain appropriate boundaries</li>
                <li>Balance self-care with care for others</li>
                <li>Take responsibility for your actions and follow through on commitments</li>
            </ul>
            <p>Remember that everyone has areas for growth, and developing self-awareness is an ongoing process.</p>
        `;
        resultDetails.appendChild(positiveMessage);
    } else {
        // Show only personality traits with scores of 3 or higher
        Object.keys(personalityDescriptions)
            .filter(type => {
                const maxScore = questionCountByType[type] || 5;
                return userScores[type] >= 3; // Only include scores of 3 or higher
            })
            .forEach((type, index) => {
                // Create card with delay for animation
                setTimeout(() => {
                    const personalityCard = document.createElement('div');
                    personalityCard.className = 'personality-card fade-in';
                    
                    // Create card header with icon and score
                    const cardHeader = document.createElement('h3');
                    
                    const iconSpan = document.createElement('span');
                    iconSpan.innerHTML = `<i class="${personalityDescriptions[type].icon} personality-icon"></i> ${personalityDescriptions[type].name}`;
                    
                    const scoreSpan = document.createElement('span');
                    scoreSpan.className = 'personality-score';
                    const maxScore = questionCountByType[type] || 5;
                    scoreSpan.textContent = `${userScores[type]}/${maxScore}`;
                    
                    cardHeader.appendChild(iconSpan);
                    cardHeader.appendChild(scoreSpan);
                    personalityCard.appendChild(cardHeader);
                    
                    // Add description
                    const description = document.createElement('p');
                    description.textContent = personalityDescriptions[type].description;
                    personalityCard.appendChild(description);
                    
                    // Add percentage bar
                    const percentageBar = document.createElement('div');
                    percentageBar.className = 'percentage-bar';
                    
                    const percentageFill = document.createElement('div');
                    percentageFill.className = 'percentage-fill';
                    percentageFill.style.width = '0%';
                    
                    percentageBar.appendChild(percentageFill);
                    personalityCard.appendChild(percentageBar);
                    
                    // Add traits list
                    const traitsList = document.createElement('ul');
                    traitsList.className = 'trait-list';
                    
                    personalityDescriptions[type].traits.forEach(trait => {
                        const traitItem = document.createElement('li');
                        traitItem.textContent = trait;
                        traitsList.appendChild(traitItem);
                    });
                    
                    personalityCard.appendChild(traitsList);
                    resultDetails.appendChild(personalityCard);
                    
                    // Animate percentage bar based on the proportion of answered questions
                    setTimeout(() => {
                        const maxScore = questionCountByType[type] || 5;
                        const percentage = (userScores[type] / maxScore) * 100;
                        percentageFill.style.width = `${percentage}%`;
                    }, 100);
                    
                }, index * 300);
            });
    }
    
    resultsContainer.appendChild(resultDetails);
    
    // Add action buttons
    const resultActions = document.createElement('div');
    resultActions.className = 'result-actions';
    
    const retakeButton = document.createElement('button');
    retakeButton.className = 'button-secondary';
    retakeButton.innerHTML = '<i class="fas fa-redo"></i> Retake Test';
    retakeButton.addEventListener('click', initTest);
    
    const homeButton = document.createElement('a');
    homeButton.className = 'button-primary';
    homeButton.href = 'welcome.html';
    homeButton.innerHTML = '<i class="fas fa-home"></i> Back to Home';
    
    // Add save results button for logged-in users
    const currentUser = window.utils.storage.get('currentUser');
    if (currentUser) {
        const saveButton = document.createElement('button');
        saveButton.id = 'save-results-button';
        saveButton.className = 'button-primary';
        saveButton.innerHTML = '<i class="fas fa-save"></i> Save to Profile';
        saveButton.addEventListener('click', () => {
            // If no high scores, save a special "no negative traits" result
            if (!hasHighScores) {
                saveNoNegativeTraitsToProfile();
            } else {
                // Otherwise save the high-scoring traits
                const sortedTypes = Object.keys(userScores)
                    .filter(type => {
                        const maxScore = questionCountByType[type] || 5;
                        return userScores[type] >= 3;
                    })
                    .sort((a, b) => userScores[b] - userScores[a]);
                saveResultsToProfile(sortedTypes);
            }
        });
        
        resultActions.appendChild(saveButton);
    }
    
    resultActions.appendChild(retakeButton);
    resultActions.appendChild(homeButton);
    resultsContainer.appendChild(resultActions);
}

// Save "no negative traits" result to profile
function saveNoNegativeTraitsToProfile() {
    // Get current user
    const currentUser = window.utils.storage.get('currentUser');
    
    if (!currentUser) {
        alert('You must be logged in to save your results. Please log in and take the test again.');
        window.location.href = 'login.html';
        return;
    }
    
    // Create special entry for no negative traits
    const badPersonalityEntry = {
        date: new Date().toISOString(),
        noNegativeTraits: true,
        type: 'bad'
    };
    
    // Initialize badPersonality array if it doesn't exist
    if (!currentUser.badPersonality) {
        currentUser.badPersonality = [];
    }
    
    // Add new test to the front of the array (newest first)
    currentUser.badPersonality.unshift(badPersonalityEntry);
    
    // Save updated user back to storage
    window.utils.storage.set('currentUser', currentUser);
    
    // Also update in the users array
    const users = window.utils.storage.get('users') || [];
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex !== -1) {
        if (!users[userIndex].badPersonality) {
            users[userIndex].badPersonality = [];
        }
        
        users[userIndex].badPersonality = currentUser.badPersonality;
        window.utils.storage.set('users', users);
    }

    // Show confirmation and redirect to profile
    const saveButton = document.getElementById('save-results-button');
    saveButton.disabled = true;
    saveButton.innerHTML = '<i class="fas fa-check"></i> Saved!';
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'result-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            Results saved successfully! Redirecting to your profile...
        </div>
    `;
    
    document.querySelector('.result-actions').appendChild(notification);
    
    // Redirect to profile after short delay
    setTimeout(() => {
        window.location.href = 'profile.html';
    }, 2000);
}

// Save results to user profile
function saveResultsToProfile(sortedTypes) {
    // Get current user
    const currentUser = window.utils.storage.get('currentUser');
    
    if (!currentUser) {
        alert('You must be logged in to save your results. Please log in and take the test again.');
        window.location.href = 'login.html';
        return;
    }
    
    // Get traits with scores of 3 or higher (or fewer if less available)
    const highTraits = sortedTypes.map(type => {
        const maxScore = questionCountByType[type] || 5;
        return {
            id: type,
            name: personalityDescriptions[type].name,
            color: type === 'lazy' ? 'c0392b' : personalityDescriptions[type].color,
            description: personalityDescriptions[type].description,
            score: userScores[type],
            maxScore: maxScore
        };
    });
    
    // Create bad personality entry
    const badPersonalityEntry = {
        date: new Date().toISOString(),
        traits: highTraits,
        type: 'bad'
    };
    
    // Initialize badPersonality array if it doesn't exist
    if (!currentUser.badPersonality) {
        currentUser.badPersonality = [];
    }
    
    // Add new test to the front of the array (newest first)
    currentUser.badPersonality.unshift(badPersonalityEntry);
    
    // Save updated user back to storage
    window.utils.storage.set('currentUser', currentUser);
    
    // Also update in the users array
    const users = window.utils.storage.get('users') || [];
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex !== -1) {
        if (!users[userIndex].badPersonality) {
            users[userIndex].badPersonality = [];
        }
        
        users[userIndex].badPersonality = currentUser.badPersonality;
        window.utils.storage.set('users', users);
    }
    
    // Show confirmation and redirect to profile
    const saveButton = document.getElementById('save-results-button');
    saveButton.disabled = true;
    saveButton.innerHTML = '<i class="fas fa-check"></i> Saved!';
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'result-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            Results saved successfully! Redirecting to your profile...
        </div>
    `;
    
    document.querySelector('.result-actions').appendChild(notification);
    
    // Redirect to profile after short delay
    setTimeout(() => {
        window.location.href = 'profile.html';
    }, 2000);
}

// Helper function to get trait implications
function getTraitImplication(traitId, score) {
    const implications = {
        paranoid: 'you may tend to overvalue your own importance and seek excessive admiration.',
        toxic: 'you might use subtle tactics to control or influence others for personal gain.',
        aggressive: 'you could express negative feelings indirectly rather than addressing issues openly.',
        narcissistic: 'you likely set unrealistically high standards and are overly critical of mistakes.',
        antisocial: 'you may rely too heavily on others for emotional support and decision-making.',
        avoidant: 'you probably tend to avoid social situations due to fear of criticism or rejection.',
        dramatic: 'you might be overly suspicious of others\' motives and have difficulty trusting people.',
        impulsive: 'you tend to act without careful consideration of consequences.',
        lazy: 'you may seek attention through emotionally expressive behavior.'
    };
    
    return implications[traitId] || 'this trait influences your behavior in various social situations.';
}

// Helper function to get trait behavior examples
function getTraitBehavior(traitId) {
    const behaviors = {
        paranoid: 'expect special treatment and have difficulty empathizing with others.',
        toxic: 'use tactics like guilt, flattery, or deception to get what they want.',
        aggressive: 'procrastinate, give silent treatment, or make sarcastic remarks rather than addressing issues.',
        narcissistic: 'struggle with decision-making and experience anxiety about making mistakes.',
        antisocial: 'have difficulty being alone and go to great lengths to maintain relationships.',
        avoidant: 'limit work or social activities due to fear of criticism or disapproval.',
        dramatic: 'interpret innocent remarks as threatening and bear grudges for perceived slights.',
        impulsive: 'engage in risky behaviors without considering consequences.',
        lazy: 'consider relationships more intimate than they actually are and express emotions in an exaggerated way.'
    };
    
    return behaviors[traitId] || 'exhibit behaviors that can cause interpersonal difficulties.';
}

// Helper function to get score bracket text
function getScoreBracket(score) {
    if (score >= 80) return 'very high';
    if (score >= 60) return 'high';
    if (score >= 40) return 'moderate';
    if (score >= 20) return 'low';
    return 'very low';
}

// Setup event listeners when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Ensure utils is defined for storage access
    if (typeof window.utils === 'undefined') {
        window.utils = {
            storage: {
                get: function(key) {
                    const item = localStorage.getItem(key);
                    try {
                        return JSON.parse(item);
                    } catch (e) {
                        return item;
                    }
                },
                set: function(key, value) {
                    if (typeof value === 'object') {
                        localStorage.setItem(key, JSON.stringify(value));
                    } else {
                        localStorage.setItem(key, value);
                    }
                },
                remove: function(key) {
                    localStorage.removeItem(key);
                },
                clear: function() {
                    localStorage.clear();
                }
            }
        };
    }
    
    // Initialize the test
    initTest();
    
    // Set up event listeners for nav buttons
    document.getElementById('prev-button').addEventListener('click', goToPreviousQuestion);
    document.getElementById('submit-button').addEventListener('click', showResults);
    
    // Check if user is logged in
    const currentUser = window.utils.storage.get('currentUser');
    if (!currentUser) {
        // Create a login reminder
        const reminder = document.createElement('div');
        reminder.className = 'login-reminder';
        reminder.innerHTML = `
            <div class="reminder-content">
                <p><strong>Note:</strong> You'll need to be logged in to save your results. <a href="login.html">Log in here</a> before taking the test.</p>
            </div>
        `;
        
        // Insert at the top of test container
        const testContainer = document.querySelector('.test-container');
        testContainer.insertBefore(reminder, testContainer.firstChild);
    }
});