//przekłada n krążków z A korzystając z B na C

function tower(n, A, B, C) {
  if (n > 0) {
    tower(n - 1, A, C, B);
    console.log(`${A} -> ${C}`);
    tower(n - 1, B, A, C);
  }
}

// tower(2, "A", "B", "C");

tower(4, "A", "B", "C");
