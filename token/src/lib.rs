use solana_program::{
    account_info::AccountInfo, entrypoint, entrypoint::ProgramResult,
    msg, pubkey::Pubkey, program_error::ProgramError
};

entrypoint!(process_instructions);

fn process_instructions(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8]
) -> ProgramResult {
    msg!("Shutuuuup! Dumb!");
    Ok(())
}