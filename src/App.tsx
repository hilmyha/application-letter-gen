import { useRef, useState } from "react";
import { Input } from "./components/Input";
import { Accordion } from "flowbite-react";
import ReactToPrint from "react-to-print";

function App() {
  // Ref for the component to be printed
  const componentRef = useRef(null);

  // user details
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [school, setSchool] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [linkedin, setLinkedin] = useState("");

  // company details
  const [company, setCompany] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");

  // job details
  const [position, setPosition] = useState("");
  const [skills, setSkills] = useState(""); // Untuk menyimpan input skill yang sedang diketik
  const [skillsArray, setSkillsArray] = useState<string[]>([]); // Untuk menyimpan daftar skill
  const [experience, setExperience] = useState("");

  // function to handle skills input
  // Handle skills change
  const handleSkillsChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const input = e.target.value;
    const newSkills = input
      .split(",")
      .map((skill) => skill.trim())
      .filter(Boolean);
    setSkillsArray(newSkills);
    setSkills(input); // Update input field with new value
  };

  return (
    <div className="min-h-[100vh] bg-gray-200">
      <div className="container pt-14 border">
        <h1 className="text-4xl font-bold text-center mb-12 underline">Application Letter Generator</h1>
        <div className="mt-6 gap-4 grid grid-flow-row grid-rows-1 lg:grid-cols-3 lg:grid-flow-col ">
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title className="md:text-lg font-semibold text-gray-800">
                Personal Details
              </Accordion.Title>
              <Accordion.Content>
                <div>
                  <Input
                    value={name}
                    placeholder="Name"
                    handleChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    value={email}
                    placeholder="Email"
                    handleChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    value={phone}
                    placeholder="Phone"
                    handleChange={(e) => setPhone(e.target.value)}
                  />
                  <Input
                    value={school}
                    placeholder="Institute"
                    handleChange={(e) => setSchool(e.target.value)}
                  />
                  <Input
                    value={address}
                    placeholder="Address"
                    handleChange={(e) => setAddress(e.target.value)}
                    isTextArea={true} // Menggunakan textarea
                  />

                  <Input
                    value={portfolio}
                    placeholder="Portfolio Link"
                    handleChange={(e) => setPortfolio(e.target.value)}
                  />
                  <Input
                    value={linkedin}
                    placeholder="LinkedIn"
                    handleChange={(e) => setLinkedin(e.target.value)}
                  />
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="md:text-lg font-semibold text-gray-800">
                Company Details
              </Accordion.Title>
              <Accordion.Content>
                <div>
                  <Input
                    value={company}
                    placeholder="Company Name"
                    handleChange={(e) => setCompany(e.target.value)}
                  />
                  <Input
                    value={companyEmail}
                    placeholder="Company Email"
                    handleChange={(e) => setCompanyEmail(e.target.value)}
                  />
                  <Input
                    value={companyPhone}
                    placeholder="Company Phone"
                    handleChange={(e) => setCompanyPhone(e.target.value)}
                  />
                  <Input
                    value={companyAddress}
                    placeholder="Address"
                    handleChange={(e) => setCompanyAddress(e.target.value)}
                    isTextArea={true} // Menggunakan textarea
                  />
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="md:text-lg font-semibold text-gray-800">
                Job Details
              </Accordion.Title>
              <Accordion.Content>
                <div>
                  <Input
                    value={position}
                    placeholder="Position"
                    handleChange={(e) => setPosition(e.target.value)}
                  />
                  <Input
                    value={skills}
                    placeholder="Skills"
                    handleChange={handleSkillsChange}
                    isTextArea={true} // Menggunakan textarea
                  />
                  <div className="my-4 text-xs text-justify font-mono">
                    <p className="font-semibold mb-2">
                      Example experience text :{" "}
                    </p>
                    <p>
                      an application aimed at promoting small businesses.
                      Additionally, I gained practical experience as a Junior
                      Web Developer during my internship at [Your Company],
                      where I developed an application to manage employee tasks.
                      This project allowed me to apply my technical skills in a
                      real-world setting and contribute to the efficiency of the
                      company's operations
                    </p>
                  </div>
                  <Input
                    value={experience}
                    placeholder="Experience"
                    handleChange={(e) => setExperience(e.target.value)}
                    isTextArea={true} // Menggunakan textarea
                  />
                </div>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
          <div className="p-16 lg:col-span-2 bg-white" ref={componentRef}>
            <div className="mb-4">
              <h2 className="text-lg font-semibold">
                {name ? name : "John Doe"}
              </h2>
              <p>{email ? email : "email@example.com"}</p>
              <p>{phone ? phone : "123-456-7890"}</p>
              <p>{address ? address : "123 Main St, City, Country"}</p>
            </div>
            <div className="my-4">
              <h2 className="text-lg font-semibold">Recruitment</h2>
              <p>{company ? company : "ex: Google.inc"}</p>
              <p>{companyEmail ? companyEmail : ""}</p>
              <p>{companyPhone ? companyPhone : ""}</p>
              <p>
                {companyAddress ? companyAddress : "123 Main St, City, Country"}
              </p>
            </div>

            <div className="my-4">
              <h2 className="mb-4 text-lg font-semibold">
                Dear Recruitment of {company ? company : "[Company name]"},
              </h2>
              <p className="mb-4 text-justify">
                My name is {name ? name : "[Your name]"}, and I am excited to
                apply for the {position ? position : "[Position]"} position at{" "}
                {company ? company : "[Company name]"}. I recently graduated
                from {school ? school : "[School name]"} with a with a focus on{" "}
                {skillsArray.length > 0
                  ? ` ${skillsArray.join(", ")}`
                  : "[Skills]"}
                . I am confident that my academic background and hands-on
                experience make me a strong candidate for this role.
              </p>
              <p className="mb-4 text-justify">
                During my studies at {school ? school : "[School name]"}, I
                gained comprehensive knowledge in{" "}
                {skillsArray.length > 0
                  ? ` ${skillsArray.join(", ")}`
                  : "[Skills]"}
                , which I applied in creating{" "}
                {experience ? experience : "[Experience]"}.
              </p>
              <p className="mb-4 text-justify">
                I am genuinely excited about the possibility of contributing to
                your team at {company ? company : "[Company name]"}. I am eager
                to apply my skills and experiences to help your company achieve
                its goals. I would welcome the opportunity to discuss my
                application further and share my vision for becoming a
                productive member of your team.
              </p>
              <p className="mb-4 text-justify">
                Thank you for considering my application. I look forward to the
                possibility of working together.
              </p>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold">Sincerely,</h2>
              <p>{name ? name : "John Doe"}</p>
              <a className="text-blue-700 underline" href={portfolio}>
                {portfolio ? portfolio : ""}
              </a>
              <br />
              <a className="text-blue-700 underline" href={linkedin}>
                {linkedin ? linkedin : ""}
              </a>
            </div>
          </div>
        </div>
        <div className="my-4 w-full flex justify-end">
          <ReactToPrint
            trigger={() => (
              <button className="px-8 py-2 bg-green-500 text-white hover:bg-green-700 rounded-lg">
                Print
              </button>
            )}
            content={() => componentRef.current}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
