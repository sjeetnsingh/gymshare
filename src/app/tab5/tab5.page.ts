import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  goals: string[] = [
    'Lose weight',
    'Build muscle',
    'Get lean',
    'Improve flexibility',
    'Increase speed',
    'Increase endurance',
    'Foundational Strength',
    'Mobility'
  ];
 // async getChatResponse(prompt: string): Promise<string> {
    // try {
    //   const response = await axios.post(this.apiUrl, {
    //     model: "gpt-4",
    //     messages: [{ role: "user", content: prompt }]
    //   }, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //      // 'Authorization': `Bearer ${this.apiKey}`
    //     }
    //   });

    //   const message = response.data.choices[0].message.content;
    //   return message;
    // } catch (error) {
    //   console.error('Error fetching response from OpenAI API:', error);
    //   throw error;
    // }
 // }
  constructor() { }

  ngOnInit() {
  }

}
