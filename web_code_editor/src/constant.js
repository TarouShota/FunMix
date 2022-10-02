export const constant = ";; operations (constant values taken from crc32 on op message in the companion .tlb files and appear during build)\n" +
    "const op::increment = 0x37491f2f;\n" +
    "const op::deposit = 0x47d54391;\n" +
    "const op::withdraw = 0x41836980;\n" +
    "const op::transfer_ownership = 0x2da38aaf;\n" +
    "\n" +
    ";; errors\n" +
    "const error::unknown_op = 101;\n" +
    "const error::access_denied = 102;\n" +
    "const error::insufficient_balance = 103;\n" +
    "\n" +
    ";; other\n" +
    "const const::min_tons_for_storage = 10000000; ;; 0.01 TON"