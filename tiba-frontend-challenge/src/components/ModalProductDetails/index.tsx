import { DialogTitle, Dialog, Box, Typography, Skeleton } from '@mui/material';

import { useProduct } from '../../providers/product';
import { useModal } from '../../providers/modals';

const SimpleDialog = () => {
  const { openModal, setOpenModal } = useModal();
  const { product, isLoading } = useProduct();

  return (
    <Dialog open={openModal} onClose={() => setOpenModal(false)}>
      <Box p={2}>
        {isLoading ? (
          <Skeleton animation="wave" height={65} />
        ) : (
          <DialogTitle>{product?.name}</DialogTitle>
        )}

        <Typography fontWeight="bold" fontSize={24}>
          Descrição do produto:
        </Typography>

        {isLoading ? (
          <Skeleton animation="wave" />
        ) : (
          <Typography>{product?.description}</Typography>
        )}

        <Box mt={3}>
          <Typography fontWeight="bold" fontSize={24}>
            Total em estoque:
          </Typography>
          {isLoading ? (
            <Skeleton animation="wave" />
          ) : (
            <Typography>{product?.quantity}</Typography>
          )}
        </Box>
      </Box>
    </Dialog>
  );
};

export default SimpleDialog;
