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
    let key: &u8 = instruction_data.first().unwrap(); // remove unwrap before pushing to prod
    
    match key {
        0 => msg!("zerooo!"),
        1 => msg!("oooone!"),
        _ => msg!("error! dumb!")
    }
    Ok(())
}