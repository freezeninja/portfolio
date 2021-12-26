import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tc-main',
  templateUrl: './tc-main.component.html',
  styleUrls: ['./tc-main.component.css']
})
export class TcMainComponent implements OnInit {

  constructor() { }

  tAndCArr = [
    {
      LTitle: 'Content Liability',
      LDesc: 'We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.'
    },
    {
      LTitle: 'Reservation of Rights',
      LDesc: 'We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.'
    },
    {
      LTitle: 'Removal of links from our website',
      LDesc: 'If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.'
    },
    {
      LTitle: 'License',
      LDesc: 'Unless otherwise stated, Propeep and/or its licensors own the intellectual property rights for all material on propeep. All intellectual property rights are reserved. You may access this from propeep for your own personal use subjected to restrictions set in these terms and conditions.'
    },
    {
      LTitle: 'Projects',
      LDesc: 'If an error or issue with the design or code arises during the development phase of the project, which does not allow the design or code to match the original specification, then the Client agrees that the Developer can apply a nearest available alternative solution. ?Once a site is live (or the site is ready to go live and merely requires the customer to add content) then the?project is deemed to be complete. ?The client has 2?months in which to provide evidence of errors caused by the Supplier, these will be reviewed and if errors are genuinely caused by the Supplier they will be put right. ?If errors are caused by the client (i.e. during the use of the Content Management System) then steps taken to remedy errors will be chargeable.'
    },
    {
      LTitle: 'Liability and Warranty Disclaimer',
      LDesc: 'The Client agrees that the Developer is not liable for any bugs, performance issues, virus, trojan, or malware attacks or failure of their WordPress (and WooCommerce) software as WordPress (and WooCommerce) is open-source software distributed under the GPL (?GNU General Public License?) and is maintained and developed by a community of thousands of users and developers. Any bugs, performance issues or failure with the software will be directed to the WordPress (and WooCommerce) Development community via WordPress (and WooCommerce).org. It will be necessary to regularly update WordPress, WooCommerce, and any plugins (and any other software used in the website). Unless a support contract is opted for by the client then updates are NOT the responsibility of the developer. Therefore the developer cannot be held responsible for any faults, bugs, viruses, trojans, malware etc., or problems occurring on the site or with the hosting.'
    }
  ]

  ngOnInit(): void {
  }

}
