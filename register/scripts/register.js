import { participantTemplateHTML, totalFees } from './templates.js';

document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add');
    const form = document.querySelector('form');
    const summaryElement = document.getElementById('summary');
    let participantCount = 1;
  
    addButton.addEventListener('click', function() {
      participantCount++;
      const participantTemplate = participantTemplateHTML(participantCount);
  
      const lastParticipantSection = document.querySelector(`.participant${participantCount - 1}`);
      if (lastParticipantSection) {
        lastParticipantSection.insertAdjacentHTML('afterend', participantTemplate);
      } else {
        const participantsFieldset = document.querySelector('.participants');
        participantsFieldset.insertAdjacentHTML('beforeend', participantTemplate);
      }
    });
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const total = totalFees();
      const adultName = document.getElementById('adult_name').value;
  
      const summaryMessage = successTemplate({
        name: adultName,
        numParticipants: document.querySelectorAll('[class^=participant]').length,
        totalFees: total
      });
  
      form.style.display = 'none';
      summaryElement.innerHTML = summaryMessage;
      summaryElement.style.display = 'block';
    });
  
    function successTemplate(info) {
      return `Thank you ${info.name} for registering. You have registered ${info.numParticipants} participants and owe $${info.totalFees} in Fees.`;
    }
  });
  