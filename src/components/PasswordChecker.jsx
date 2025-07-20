import { useState } from "react";

const PasswordChecker = (props) => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState({
    length: 0,
    hasUpper: false,
    hasLower: false,
    hasNumber: false,
    hasSpecial: false,
  });

  function passwordStrength(event) {
    const value = event.currentTarget.value;
    setPassword(value);
    
    setStrength({
      length: value.length,
      hasUpper: /[A-Z]/.test(value),
      hasLower: /[a-z]/.test(value),
      hasNumber: /[0-9]/.test(value),
      hasSpecial: /[^A-Za-z0-9]/.test(value),
    });
  }

  function calculateStrength() {
    let score = 0;
    
    // Length contributes up to 50% of the score
    score += Math.min(strength.length * 2, 50);
    
    // Character variety contributes the other 50%
    const varietyScore = [
      strength.hasUpper,
      strength.hasLower,
      strength.hasNumber,
      strength.hasSpecial
    ].filter(Boolean).length * 12.5;
    
    score += varietyScore;
    
    return Math.min(score, 100);
  }

  function estimateCrackTime() {
    const strengthScore = calculateStrength();
    
    // Very rough estimation based on password strength
    if (strengthScore < 30) return "less than a minute";
    if (strengthScore < 50) return "a few minutes";
    if (strengthScore < 70) return "several hours";
    if (strengthScore < 90) return "months";
    return "centuries";
  }

  const strengthScore = calculateStrength();
  const crackTime = estimateCrackTime();

  return (
    <div className="mb-20">
      <div className="flex flex-col-reverse w-full p-20" ref={props.ref}>
        <input
          placeholder="Evaluate your password"
          className="relative h-12 px-4 py-1 text-xs border-0 rounded-lg shadow-xl outline-none peer ring ring-base-200 duration-500 focus:ring-2 focus:border-base-100 placeholder:duration-500 placeholder:absolute focus:placeholder:pt-10 shadow-base-400/10 focus:shadow-none focus:rounded-md focus:ring-blue-600 placeholder:text-base-500"
          type="password" // Changed to password type for security
          onChange={passwordStrength}
          value={password}
        />
        <span className="mb-2 text-xs opacity-0 duration-500 peer-focus:opacity-100 text-base-500 -translate-y-12 peer-focus:translate-y-0">
          Evaluate your password
        </span>
      </div>

      <div className="p-4">
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span>Password strength:</span>
            <span>{strengthScore}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="h-2.5 rounded-full" 
              style={{
                width: `${strengthScore}%`,
                backgroundColor: 
                  strengthScore < 30 ? "red" :
                  strengthScore < 60 ? "orange" :
                  strengthScore < 80 ? "yellow" : "green"
              }}
            ></div>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-medium">Password requirements:</h4>
          <ul className="text-sm">
            <li className={strength.length >= 8 ? "text-green-500" : "text-gray-500"}>
              {strength.length >= 8 ? "✓" : "✗"} At least 8 characters
            </li>
            <li className={strength.hasUpper ? "text-green-500" : "text-gray-500"}>
              {strength.hasUpper ? "✓" : "✗"} Uppercase letters
            </li>
            <li className={strength.hasLower ? "text-green-500" : "text-gray-500"}>
              {strength.hasLower ? "✓" : "✗"} Lowercase letters
            </li>
            <li className={strength.hasNumber ? "text-green-500" : "text-gray-500"}>
              {strength.hasNumber ? "✓" : "✗"} Numbers
            </li>
            <li className={strength.hasSpecial ? "text-green-500" : "text-gray-500"}>
              {strength.hasSpecial ? "✓" : "✗"} Special characters
            </li>
          </ul>
        </div>

        <div>
          Estimated time to crack: <strong>{crackTime}</strong>
        </div>
      </div>
    </div>
  );
};

export default PasswordChecker;