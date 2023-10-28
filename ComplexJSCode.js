/* 
  Filename: ComplexJSCode.js
  Content: Sophisticated and complex Javascript code example
*/

// Complex class definition
class Complex {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  // Addition of complex numbers
  add(complex) {
    return new Complex(
      this.real + complex.real,
      this.imaginary + complex.imaginary
    );
  }

  // Subtraction of complex numbers
  subtract(complex) {
    return new Complex(
      this.real - complex.real,
      this.imaginary - complex.imaginary
    );
  }

  // Multiplication of complex numbers
  multiply(complex) {
    const realPart =
      this.real * complex.real - this.imaginary * complex.imaginary;
    const imaginaryPart =
      this.real * complex.imaginary + this.imaginary * complex.real;

    return new Complex(realPart, imaginaryPart);
  }

  // Division of complex numbers
  divide(complex) {
    const denominator =
      complex.real * complex.real + complex.imaginary * complex.imaginary;
    const realPart =
      (this.real * complex.real + this.imaginary * complex.imaginary) /
      denominator;
    const imaginaryPart =
      (this.imaginary * complex.real - this.real * complex.imaginary) /
      denominator;

    return new Complex(realPart, imaginaryPart);
  }
}

// Complex number examples
const complex1 = new Complex(3, 2);
const complex2 = new Complex(1, 4);

// Perform operations on complex numbers
const complexSum = complex1.add(complex2);
const complexDifference = complex1.subtract(complex2);
const complexProduct = complex1.multiply(complex2);
const complexQuotient = complex1.divide(complex2);

// Output results
console.log("Complex Sum:", complexSum);
console.log("Complex Difference:", complexDifference);
console.log("Complex Product:", complexProduct);
console.log("Complex Quotient:", complexQuotient);

// Other complex number operations (e.g., modulus, phase) can be added as well

// More sophisticated and complex code can be added here...

// End of code